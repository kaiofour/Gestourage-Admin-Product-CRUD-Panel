@extends('layouts.app')
@section('title', 'Edit Product')
@section('content')
<!DOCTYPE html>
<html>
<head>
    <title>Edit Product</title>
</head>
<body>
    <h1>Edit Product</h1>

    <form action="{{ route('products.update', $product->prodID) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        <label for="prodName">Product Name:</label>
        <input type="text" id="prodName" name="prodName" value="{{ old('prodName', $product->prodName) }}" required>
        <br>

        <label for="prodDesc">Product Description:</label>
        <input type="text" id="prodDesc" name="prodDesc" value="{{ old('prodDesc', $product->prodDesc) }}" required>
        <br>

        <label for="prodImageURL">Product Image:</label>
        <input type="file" id="prodImageURL" name="prodImageURL">
        <br>

        <label for="prodLastModified">Last Modified:</label>
        <input type="date" id="prodLastModified" name="prodLastModified" value="{{ old('prodLastModified', $product->prodLastModified) }}" required>
        <br>

        <button type="submit">Update Product</button>
    </form>

    <a href="{{ route('admin.dashboard') }}">Back to Dashboard</a>
</body>
</html>
@endsection