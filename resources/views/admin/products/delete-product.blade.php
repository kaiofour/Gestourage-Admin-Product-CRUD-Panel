<form action="{{ route('products.destroy', $product->prodID) }}" method="POST">
    @csrf
    @method('DELETE')
    <button type="submit">Delete</button>
</form>
