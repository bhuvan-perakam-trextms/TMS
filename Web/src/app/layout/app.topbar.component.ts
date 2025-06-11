import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { UserService } from '../demo/service/user.service';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import { ChatLlmService } from './service/chat-llm.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styleUrl: './app.topbar.component.scss'
})
export class AppTopBarComponent {

    ChatVisible: boolean = false;
    items!: MenuItem[];

    chatMessages: { text: string, sender: 'user' | 'bot', time: string }[] = [
        { text: 'Hello! This is TREXTMS Chat Assistant. How can i help you today?', sender: 'bot', time: '10:00 AM' }
    ];
    chatInput: string = '';
    loading: boolean = false;

    @ViewChild('menubutton') menuButton!: ElementRef;
    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;
    @ViewChild('topbarmenu') menu!: ElementRef;
    @ViewChild('chatMessagesDiv') chatMessagesDiv!: ElementRef;

    constructor(
        public layoutService: LayoutService,
        public userService: UserService, 
        private authService: SocialAuthService,
        private router: Router,
        private chatLlm: ChatLlmService
    ) { }

    signOut(): void {
        this.authService.signOut();
        this.router.navigate(['/']);
    }

    onChatButtonClick() {
        this.ChatVisible = true;
        setTimeout(() => this.scrollToBottom(), 100);
    }

    sendMessage() {
        if (!this.chatInput.trim()) return;
        const userMsg: { text: string; sender: 'user' | 'bot'; time: string } = { text: this.chatInput, sender: 'user', time: this.getCurrentTime() };
        this.chatMessages.push(userMsg);
        this.loading = true;
        const input = this.chatInput;
        this.chatInput = '';
        this.scrollToBottom();
        this.chatLlm.sendMessage(input).subscribe({
            next: (res) => {
                let botText = res[0]?.generated_text || 'No response';
                // Remove echo if present
                if (botText.startsWith(input)) botText = botText.slice(input.length).trim();
                const botMsg: { text: string; sender: 'user' | 'bot'; time: string } = { text: botText, sender: 'bot', time: this.getCurrentTime() };
                this.chatMessages.push(botMsg);
                this.loading = false;
                this.scrollToBottom();
            },
            error: () => {
                const errMsg: { text: string; sender: 'user' | 'bot'; time: string } = { text: 'Sorry, there was an error connecting to the AI.', sender: 'bot', time: this.getCurrentTime() };
                this.chatMessages.push(errMsg);
                this.loading = false;
                this.scrollToBottom();
            }
        });
    }

    getCurrentTime(): string {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    scrollToBottom() {
        setTimeout(() => {
            if (this.chatMessagesDiv) {
                this.chatMessagesDiv.nativeElement.scrollTop = this.chatMessagesDiv.nativeElement.scrollHeight;
            }
        }, 100);
    }

    clearChat() {
        this.chatMessages = [
            { text: 'Hello! This is TREXTMS Chat Assistant. How can i help you today?', sender: 'bot', time: this.getCurrentTime() }
        ];
    }

    onInputKeydown(event: KeyboardEvent) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            this.sendMessage();
        }
    }
}
