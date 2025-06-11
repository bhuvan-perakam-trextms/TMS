import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChatLlmService {
  private apiUrl = 'https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta';
  private apiKey = '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'; // <-- Replace with your Hugging Face token

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    });
    return this.http.post(this.apiUrl, { inputs: message }, { headers });
  }
} 