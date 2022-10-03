import { Component, OnInit } from '@angular/core';

/**
 * A component that serves as a conglomerate of several components in order to
 * look like a terminal.
 *
 * The terminal should ideally be structured as the following:
 * - app-command
 * - Anything you want, including a div or app-neofetch.
 * You can repeat this structure multiple times. All that matters is that it
 * ends up looking like its namesake.
 */
@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  user: string = "root";
  hostname: string="kenneth.dev";
  directory: string = "~";
  age: string = "";

  constructor() { }

  ngOnInit(): void { 
    this.age = this.formatAge();
  }

  // Calculates my age. I guess the cat's out of the bag for whoever looks at
  // this source.
  calculateAge(): number {
    const msDifference: number = Math.floor(
      new Date().getTime() - new Date(2001, 1, 13).getTime()
    );
    const msPerDay: number = 1000 * 60 * 60 * 24;

    const days: number = Math.floor(msDifference / msPerDay);
    const months: number = Math.floor(days / 31);
    return Math.floor(months / 12);
  }

  // Formats my age into a string.
  // Although, most of it is kinda redundant for obvious reasons.
  formatAge(): string {
    const years: number = this.calculateAge();
    if (years === 1) {
      return `${years} year old`;
    } else {
      return `${years} years old`;
    }
  }

}

