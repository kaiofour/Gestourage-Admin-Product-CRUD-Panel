@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Edit Product</h1>
    <form action="{{ route('products.update', $product->prodID) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <div class="form-group">
            <label for="prodName">Product Name</label>
            <input type="text" name="prodName" class="form-control" id="prodName" value="{{ $product->prodName }}" required>
        </div>
        <div class="form-group">
            <label for="prodDesc">Product Description</label>
            <textarea name="prodDesc" class="form-control" id="prodDesc" required>{{ $product->prodDesc }}</textarea>
        </div>
        <div class="form-group">
            <label for="prodImageURL">Product Image</label>
            <input type="file" name="prodImageURL" class="form-control-file" id="prodImageURL">
            @if($product->prodImageURL)
                <img src="data:image/jpeg;base64,{{ $product->prodImageURL }}" alt="Product Image" class="mt-2" style="max-width: 200px;">
            @endif
        </div>
        <div class="form-group">
            <label for="prodLastModified">Last Modified Date</label>
            <input type="date" name="prodLastModified" class="form-control" id="prodLastModified" value="{{ $product->prodLastModified }}" required>
        </div>
        <button type="submit" class="btn btn-primary">Update Product</button>
    </form>
</div>

<!-- <div class="container">
    <h1>Delete Product</h1>
    <p>Are you sure you want to delete this product?</p>

    <form action="{{ route('products.destroy', $product->prodID) }}" method="POST">
        @csrf
        @method('DELETE')
        <button type="submit" class="btn btn-danger">Delete</button>
        <a href="{{ route('admin.dashboard') }}" class="btn btn-secondary">Cancel</a>
    </form>
</div> -->

@endsection
