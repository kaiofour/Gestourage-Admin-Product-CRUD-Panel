<!DOCTYPE html>
<html>
<head>
    <title>Admin Panel</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</head>

<body>
    <header>
        <h2 class="headTitle"></h2>
        <nav class="navbar-nav">
            <a href="{{ route('admin.logout') }}" class="active">Logout</a>
        </nav>
    </header>

    <div class="container mb-14"></div>
    <div class="container pt-5">
        <h2 class="titlewrap mb-5">Dashboard</h2>
        <a class="btn btn-success" href="{{ route('products.create') }}" role="button">Add Product</a>
        <br>
        <table class="table">
            <thead>
                <tr>
                    <th>prodID</th>
                    <th>prodName</th>
                    <th>prodDesc</th>
                    <th>prodImageURL</th>
                    <th>prodLastModified</th>
                </tr>
            </thead>
            <tbody>
                @foreach($products as $product)
                <tr>
                    <td>{{ $product->prodID }}</td>
                    <td>{{ $product->prodName }}</td>
                    <td>{{ $product->prodDesc }}</td>
                    <td><img src="data:image/jpeg;base64,{{ base64_encode($product->prodImageURL) }}" alt="{{ $product->prodName }}" style="width:50px;height:50px;"></td>
                    <td>{{ $product->prodLastModified }}</td>
                    <td>
                        <a class="btn btn-primary btn-sm" href="{{ route('products.edit', $product->prodID) }}">Edit</a>
                        <a class="btn btn-danger btn-sm" href="{{ route('products.destroy', $product->prodID) }}">Delete</a>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</body>
</html>
