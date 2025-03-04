import { Component } from '@angular/core';
import type { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: Product[] = [
    {
      product: 'Bacon',
      price: 15.99,
      currency: '€',
      rating: 5,
      favorite: false,
      description:
        'El auténtico best seller de esta casa. Picamos la carne en la plancha y la mezclamos con bacon, cebolla crunchy y queso americano. ¡Una vez que la pruebas no puedes dejar de pensar en ella!',
      similarProducts: [
        { product: 'Retro', price: 16.99, currency: '€', rating: 4.3 },
        { product: 'Hat Trick', price: 16.99, currency: '€', rating: 2 },
      ],
      reviews: [
        {
          image: '',
          name: 'Homer J. Simpson',
          rating: 5,
          opinion:
            '¡Increíble! La carne jugosa y el bacon crujiente hacen una combinación perfecta.',
          date: 'Ayer por la tarde, 2023',
        },
        {
          image: '',
          name: 'Marge Simpson',
          rating: 5,
          opinion:
            'Me gustó mucho, aunque para mi gusto tenía demasiado bacon.',
          date: 'Ayer por la tarde, 2023',
        },
      ],
    },
    {
      product: 'Retro',
      price: 14.99,
      currency: '€',
      rating: 4.3,
      favorite: false,
      description:
        'Una receta clásica con carne, queso americano, cebolla morada a la plancha, tomate, lechuga batavia, pepinillos y nuestras salsas especiales.',
      similarProducts: [
        { product: 'Bacon', price: 15.99, currency: '€', rating: 5 },
        { product: 'Donut', price: 20, currency: '€', rating: 3.8 },
      ],
      reviews: [
        {
          image: '',
          name: 'Bart Simpson',
          rating: 4.3,
          opinion: 'Muy buena, aunque me hubiera gustado un poco más de salsa.',
          date: 'Hace 2 días, 2023',
        },
      ],
    },
    {
      product: 'Donut',
      price: 20,
      currency: '€',
      rating: 3.8,
      favorite: false,
      description:
        'La Golden Glaze: doble smash con mucho queso americano, bacon bits y un huevo frito entre dos donuts glaseados.',
      reviews: [],
    },
    {
      product: 'Hat Trick',
      price: 14.99,
      currency: '€',
      rating: 2,
      favorite: false,
      description:
        'Tres carnes smash, queso americano, queso scamorza ahumado, cebolla morada a la plancha y nuestra salsa especial.',
      similarProducts: [
        { product: 'Retro', price: 16.99, currency: '€', rating: 4.8 },
        { product: 'Bacon', price: 15.99, currency: '€', rating: 5 },
      ],
      reviews: [
        {
          image: '',
          name: 'Ned Flanders',
          rating: 2,
          opinion:
            'Buena hamburguesa, pero me gustaría que la carne estuviera un poco más hecha.',
          date: 'Hace 4 días, 2023',
        },
      ],
    },
  ];

  defaultProduct = {
    product: 'No disponemos de productos en stock',
    price: 0,
    currency: '',
    rating: 0,
    description: '',
    favorite: false,
    similarProducts: [],
    reviews: [],
  };

  selectedProduct = this.products[0];
  filteredProducts = [...this.products];
  selectedProductIndex: number = 0;

  background = '';
  textColor = '';
  colorBottonDelete = 'secondary';

  colorBottonReview = 'secondary';
  colorBottonPrice = 'secondary';

  selectProduct(index: number): void {
    this.selectedProductIndex = index;
    this.selectedProduct = this.filteredProducts[index];
    this.updateBackground();
  }

  updateBackground(): void {
    if (this.selectedProduct.favorite) {
      this.background = 'dark';
      this.textColor = 'white';
      this.colorBottonDelete = 'light';
    } else {
      this.background = 'light';
      this.textColor = 'dark';
      this.colorBottonDelete = 'secondary';
    }
  }

  filterByPrice(): void {
    this.filteredProducts = this.products.filter(
      (product) => product.price < 15
    );
    this.colorBottonPrice = 'dark';
    this.colorBottonReview = 'secondary';
  }

  filterByReview(): void {
    this.filteredProducts = this.products.filter(
      (product) => product.reviews.length !== 0
    );
    this.colorBottonPrice = 'secondary';
    this.colorBottonReview = 'dark';
  }

  resetFilter(): void {
    this.filteredProducts = [...this.products];
    this.colorBottonPrice = 'secondary';
    this.colorBottonReview = 'secondary';
  }

  productFavorite(index: number): void {
    const productFav = this.products[index];
    if (productFav.favorite) {
      this.background = 'light';
      this.textColor = 'dark';
      this.colorBottonDelete = 'secondary';
      this.products[index].favorite = false;
    } else {
      this.background = 'dark';
      this.textColor = 'white';
      this.colorBottonDelete = 'light';
      this.products[index].favorite = true;
    }
  }

  getRatingImage(rating: number): string {
    if (rating > 3 && rating < 4) {
      return 'assets/3.5.png';
    } else if (rating > 4 && rating < 5) {
      return 'assets/4.5.png';
    } else if (rating > 2 && rating < 3) {
      return 'assets/2.5.png';
    } else {
      return `assets/${rating}.png`;
    }
  }

  deleteProduct(index: number): void {
    const productToDelete = this.products[index];
    this.products.splice(index, 1);
    this.filteredProducts.splice(index, 1);
    if (this.selectedProduct === productToDelete) {
      this.selectedProduct =
        this.products.length > 0 ? this.products[0] : this.defaultProduct;
      this.selectedProduct =
        this.filteredProducts.length > 0
          ? this.filteredProducts[0]
          : this.defaultProduct;
    }
  }
}
