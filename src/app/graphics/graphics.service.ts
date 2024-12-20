import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { Graphics } from './graphics.model';
import { CsrfService } from '../csrf.service';
import { environment } from '../../environments/environment';

//Importación e los datos
import graphicsData from '../../../public/data/graphicsData.json';

@Injectable({ providedIn: 'root' })
export class GraphicsService {

    //TODO CAMBIAR URL DE LA API
    private apiUrl = environment.apiUrl + '/posts';
    public graphics: Graphics[] = graphicsData;

    public backendGraphics: Graphics[] = [];
    public frontendGraphics: Graphics[] = [];
    public languagesGraphics: Graphics[] = [];



    //! ADAPTACIÓN DEL CÓDIGO EN CASO DE TRABAJAR CON BBDD
    private postsUpdated = new Subject<Graphics[]>();
    private newPosts: Graphics[] = [];
    
    constructor(private http: HttpClient, private csrfService: CsrfService) {
        this.backendGraphics = this.graphics.filter(graphic => graphic.category === 'backend');
        this.frontendGraphics = this.graphics.filter(graphic => graphic.category === 'frontend');
        this.languagesGraphics = this.graphics.filter(graphic => graphic.category === 'languages');
    }

    
    getPosts(): void {
        this.http.get<{ message: string; posts: Graphics[] }>(this.apiUrl, { withCredentials: true })
        .pipe(
            tap(postData => {
                this.graphics = postData.posts;
                this.postsUpdated.next([...this.graphics]);
                console.log('Posts fetched:', this.graphics);
            }),
            catchError(error => {
                console.error('Error fetching posts:', error);
                return of({ message: '', posts: [] }); // Retorna un observable vacío en caso de error
            })
        )
        .subscribe(); // Suscribirse para iniciar la solicitud
    }

    // Método para obtener un observable de actualizaciones de posts
    getPostUpdateListener(): Observable<Graphics[]> {
        return this.postsUpdated.asObservable();
    }


    // Método para agregar un nuevo post
    addPost(post: Graphics): Observable<any> {
        this.newPosts.push(post); 
        console.log('NUEVO POST:', post);

        // Obtener encabezados con el token CSRF
        return this.csrfService.getHeaders().pipe(
        switchMap(headers => {
            const body = post;
            return this.http.post<Graphics>(
                this.apiUrl, 
                body, 
                { headers, withCredentials: true }
            ).pipe(
            catchError(error => {
                console.error('Error adding post:', error);
                return of(error);
            })
            );
        })
        );
    }

    deletePost(postId: string): Observable<any> {
        return this.csrfService.getHeaders().pipe(
        switchMap(headers => {
            console.log('Intentando borrar en el front:', postId);
            return this.http.delete(this.apiUrl + '/' + postId, { headers, withCredentials: true }).pipe(
                catchError(error => {
                    console.error('Error deleting post:', error);
                    return of(error);
            })
            );
        })
        );
    }

    updatePost(post: Graphics): Observable<any> {
        const postId= post._id;
        return this.csrfService.getHeaders().pipe(
        switchMap(headers => {
            console.log('Intentando actualizar en el front:', post);
            const body = post;
            return this.http.put(this.apiUrl + '/' + postId, body, { headers, withCredentials: true }).pipe(
            catchError(error => {
                console.error('Error updating post:', error);
                return of(error);
            })
            );
        })
        );
    }


}
