import { Component, Input, OnInit } from '@angular/core';

/**
 * A component that serves to resemble a command in a terminal.
 * It uses Powerline symbols, along with a user, directory, and command to
 * achieve this.
 *
 * Well, it's more along the lines of what my terminal looks like, but the idea
 * is practically the same.
 */
@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css'],
})
export class CommandComponent implements OnInit {
  @Input() user: string = '';
  @Input() hostname: string = '';
  @Input() directory: string = '';
  @Input() command: string = '';

  constructor() {}
}
