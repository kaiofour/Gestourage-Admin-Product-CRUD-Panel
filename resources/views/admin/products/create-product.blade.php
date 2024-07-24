@extends('layouts.app')

@section('title', 'Create Product')

@section('content')
<div class="container">
    <h2>Create Product</h2>
    <form method="POST" action="{{ route('products.store') }}" enctype="multipart/form-data">
        @csrf
        <div class="form-group">
            <label for="prodName">Product Name</label>
            <input type="text" class="form-control" id="prodName" name="prodName" required>
        </div>
        <div class="form-group">
            <label for="prodDesc">Product Description</label>
            <textarea class="form-control" id="prodDesc" name="prodDesc" required></textarea>
        </div>
        <div class="form-group">
            <label for="prodImageURL">Product Image</label>
            <input type="file" class="form-control" id="prodImageURL" name="prodImageURL" required>
        </div>
        <div class="form-group">
            <label for="prodLastModified">Last Modified</label>
            <input type="date" class="form-control" id="prodLastModified" name="prodLastModified" required>
        </div>
        <button type="submit" class="btn btn-success">Create</button>
    </form>
</div>
@endsection
