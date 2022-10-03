import { Component, Input, OnInit } from '@angular/core';

/**
 * A component that serves to resemble the results of neofetch.
 * As such, it displays an image and a collection of "entries" next to it.
 */
@Component({
  selector: 'app-neofetch',
  templateUrl: './neofetch.component.html',
  styleUrls: ['./neofetch.component.css']
})
export class NeofetchComponent implements OnInit {

  @Input() imagePath: string = "";
  @Input() user: string = "";
  @Input() hostname: string = "";
  divider: string = "";
  @Input() entries: NeofetchEntry[] = [];

  constructor() { }

  ngOnInit(): void {
    this.divider = this.buildDivider();
  }

  // Builds the divider between user@hostname and the entries.
  buildDivider(): string {
    let divider: string = "";
    for (
      let i: number = 0;
      i < this.user.length + this.hostname.length + 1;
      i++
    ) {
      divider += "-";
    }
    return divider;
  }

}

/**
 * An entry in a neofetch component.
 */
class NeofetchEntry {
  label: string;
  value: AnchorableString;

  constructor(label: string, value: AnchorableString) {
    this.label = label;
    this.value = value;
  }
}

/**
 * A string that may or may not be an anchor.
 */
class AnchorableString {
  isAnchor: boolean;
  path: string;
  str: string;

  constructor(isAnchor: boolean, path: string, str: string) {
    this.isAnchor = isAnchor;
    this.path = path;
    this.str = str;
  }
}

