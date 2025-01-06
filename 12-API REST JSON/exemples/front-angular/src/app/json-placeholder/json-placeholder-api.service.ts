/**
 * https://github.com/typicode/jsonplaceholder/issues/65
 */
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  JpAlbum,
  JpComment,
  JpPhoto,
  JpPost,
  JpUser,
} from './json-placeholder.types';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderAPIService {
  http = inject(HttpClient);
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  getPosts(): Observable<JpPost[]> {
    return this.http.get<JpPost[]>(`${this.baseUrl}/posts`);
  }

  getPost(id: number): Observable<JpPost> {
    return this.http.get<JpPost>(`${this.baseUrl}/posts/${id}`);
  }

  createPost(post: JpPost): Observable<JpPost> {
    return this.http.post<JpPost>(`${this.baseUrl}/posts`, post);
  }

  updatePost(post: JpPost): Observable<JpPost> {
    return this.http.put<JpPost>(`${this.baseUrl}/posts/${post.id}`, post);
  }

  deletePost(id: number): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/posts/${id}`);
  }

  getComments(postId: number): Observable<JpComment[]> {
    return this.http.get<JpComment[]>(
      `${this.baseUrl}/posts/${postId}/comments`
    );
  }

  createComment(comment: JpComment): Observable<JpComment> {
    return this.http.post<JpComment>(
      `${this.baseUrl}/posts/${comment.postId}/comments`,
      comment
    );
  }

  updateComment(comment: JpComment): Observable<JpComment> {
    return this.http.put<JpComment>(
      `${this.baseUrl}/posts/${comment.postId}/comments/${comment.id}`,
      comment
    );
  }

  deleteComment(id: number): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/posts/comments/${id}`);
  }

  /**
   * De nombreux endpoints de l'API JSONPlaceholder prennent en charge
   * la pagination.
   * Elle est implémentée dans ce service uniquement pour les albums
   * car c'est le seul cas où elle est utilisée dans l'application.
   *
   * NOTE : cette façon de gérer les paramètres de requête n’est pas
   * recommandée, car elle manipule des chaînes de caractères.
   * Il est préférable d'utiliser HttpParams pour gérer les paramètres
   * de requête.
   *
   * Pour un exemple d'utilisation de HttpParams, voir la méthode
   * `getRestaurants()` dans le service `restaurant-api.service.ts`.
   */
  getAlbums(pageNumber?: number): Observable<JpAlbum[]> {
    let query = '';
    if (pageNumber) {
      query = `?_page=${pageNumber}`;
    }
    return this.http.get<JpAlbum[]>(`${this.baseUrl}/albums${query}`);
  }

  getAlbum(id: number): Observable<JpAlbum> {
    return this.http.get<JpAlbum>(`${this.baseUrl}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<JpPhoto[]> {
    return this.http.get<JpPhoto[]>(`${this.baseUrl}/albums/${id}/photos`);
  }

  getUserAlbums(userId: number): Observable<JpAlbum[]> {
    return this.http.get<JpAlbum[]>(`${this.baseUrl}/users/${userId}/albums`);
  }

  getUserPosts(userId: number): Observable<JpPost[]> {
    return this.http.get<JpPost[]>(`${this.baseUrl}/users/${userId}/posts`);
  }

  getUserComments(userId: number): Observable<JpComment[]> {
    return this.http.get<JpComment[]>(
      `${this.baseUrl}/users/${userId}/comments`
    );
  }

  getPhotos(albumId: number): Observable<JpPhoto[]> {
    return this.http.get<JpPhoto[]>(`${this.baseUrl}/albums/${albumId}/photos`);
  }

  getUsers(): Observable<JpUser[]> {
    return this.http.get<JpUser[]>(`${this.baseUrl}/users`);
  }

  getUser(id: number): Observable<JpUser> {
    return this.http.get<JpUser>(`${this.baseUrl}/users/${id}`);
  }
}
