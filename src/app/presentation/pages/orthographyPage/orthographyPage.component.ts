import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MyMessageComponent } from '@components/chat-bubbles/myMessage/myMessage.component';
import { ChatMessageComponent, TextMessageBoxFileComponent, TypingLoaderComponent } from '@components/index';
import { TextMessageBoxComponent } from '@components/text-boxes/textMessageBox/textMessageBox.component';




@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent
  ],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {

  handleMessage(promt:string){
    console.log(promt)
  }
 }
