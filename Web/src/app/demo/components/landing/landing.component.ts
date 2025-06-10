import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { UserService } from 'src/app/demo/service/user.service';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit, OnDestroy {
    newsItems: any[] = [];
    loading: boolean = true;
    private refreshSubscription: Subscription | undefined;

    constructor(
        public layoutService: LayoutService, 
        public router: Router,
        public userService: UserService,
        private http: HttpClient
    ) { }

    ngOnInit() {
        this.fetchNews();
        // Refresh news every 5 minutes
        this.refreshSubscription = interval(5 * 60 * 1000).subscribe(() => {
            this.fetchNews();
        });
    }

    ngOnDestroy() {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    }

    fetchNews() {
        // Using a CORS proxy to fetch the RSS feed
        const proxyUrl = 'https://api.allorigins.win/raw?url=';
        const rssUrl = 'https://www.bbc.co.uk/news/business/rss.xml';
        
        this.http.get(proxyUrl + encodeURIComponent(rssUrl), { responseType: 'text' })
            .subscribe({
                next: (response: string) => {
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(response, 'text/xml');
                    const items = xmlDoc.getElementsByTagName('item');
                    
                    this.newsItems = Array.from(items).slice(0, 5).map(item => {
                        const title = item.getElementsByTagName('title')[0]?.textContent || '';
                        const description = item.getElementsByTagName('description')[0]?.textContent || '';
                        const link = item.getElementsByTagName('link')[0]?.textContent || '';
                        const pubDate = item.getElementsByTagName('pubDate')[0]?.textContent || '';
                        
                        return {
                            title,
                            description,
                            link,
                            pubDate: this.formatDate(pubDate)
                        };
                    });
                    
                    this.loading = false;
                },
                error: (error) => {
                    console.error('Error fetching news:', error);
                    this.loading = false;
                }
            });
    }

    formatDate(dateString: string): string {
        const date = new Date(dateString);
        const now = new Date();
        const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
        
        if (diffInHours < 24) {
            return `${diffInHours} hrs ago`;
        } else {
            return date.toLocaleDateString('en-GB', { 
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            });
        }
    }
}
