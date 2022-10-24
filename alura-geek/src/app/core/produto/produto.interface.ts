export interface Produto {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  img?: string;
  category?: number;
  userId?: number;
}

export interface UploadProduto extends Produto {
  imageFile: File;
}