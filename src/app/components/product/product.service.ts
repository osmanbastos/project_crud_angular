import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from './product.model';
import { Observable, EMPTY, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  supabaseUrl = 'https://xkuxxnwdojcppvizlqub.supabase.co';
  supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrdXh4bndkb2pjcHB2aXpscXViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc3NzA0NTUsImV4cCI6MjAzMzM0NjQ1NX0.9UzGjk08ojWIIAVzNKoUc9gJkje367EIF39jL5AnrDs';
  supabase: SupabaseClient;

  constructor(private snackBar: MatSnackBar) {
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
   }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(product: Product): Observable<Product> {
    console.log('Creating product:', product);
    return from(this.supabase.from('products').insert([product]).select()).pipe(
      map((response: any) => {
        console.log('Create response:', response);
        if (response.error) {
          throw new Error(response.error.message);
        }
        if (!response.data || response.data.length === 0) {
          throw new Error('No data returned from the API');
        }
        return response.data[0] as Product;
      }),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Product[]> {
    return from(this.supabase.from('products').select('*')).pipe(
      map((response: any) => response.data as Product[]),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Product> {
    return from(this.supabase.from('products')
    .select('*')
    .eq('id', id))
    .pipe(map((response: any) => response.data ? response.data[0] : null));
  }

  update(product: Product): Observable<Product> {
    console.log('Updating product:', product);
    return from(this.supabase.from('products').update(product).eq('id', product.id).select()).pipe(
      map((response: any) => {
        console.log('Update response:', response);
        if (response.error) {
          throw new Error(response.error.message);
        }
        if (!response.data || response.data.length === 0) {
          throw new Error('No data returned from the API');
        }
        return response.data[0] as Product;
      }),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(product: Product): Observable<null> {
    console.log('Deleting product:', product);
    return from(this.supabase.from('products').delete().eq('id', product.id)).pipe(
      map((response: any) => {
        console.log('Delete response:', response);
        if (response.error) {
          throw new Error(response.error.message);
        }
        return null;
      }),
      catchError((e) => this.errorHandler(e))
    );
  }

  private errorHandler(e: any): Observable<any> {
    console.error('Ocorreu um erro!', e)
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
