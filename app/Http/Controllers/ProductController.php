<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function create()
    {
        return view('admin.products.create-product');
    }

    public function store(Request $request)
    {
        $request->validate([
            'prodName' => 'required',
            'prodDesc' => 'required',
            'prodImageURL' => 'required|image',
            'prodLastModified' => 'required|date',
        ]);
    
        if ($request->hasFile('prodImageURL')) {
            // Handle file upload
            $imageContent = file_get_contents($request->file('prodImageURL')->getRealPath());
            $encodedImage = base64_encode($imageContent);
    
            // Debug: Check the length of the encoded string
            // dd(strlen($encodedImage));
        } else {
            return redirect()->back()->withErrors('Image file is required.');
        }
    
        $product = new Product([
            'prodName' => $request->get('prodName'),
            'prodDesc' => $request->get('prodDesc'),
            'prodImageURL' => $encodedImage,
            'prodLastModified' => $request->get('prodLastModified'),
        ]);
    
        if (!$product->save()) {
            return redirect()->back()->withErrors('Failed to save the product.');
        }
    
        return redirect()->route('admin.dashboard')->with('success', 'Product created successfully.');
    }
    

    public function edit($id)
    {
        $product = Product::find($id);
        if (!$product) {
            // Log or debug if product is not found
            abort(404, 'Product not found');
        }
        return view('admin.products.edit-product', compact('product'));
    }


    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);
        
        $request->validate([
            'prodName' => 'required',
            'prodDesc' => 'required',
            'prodImageURL' => 'nullable|image',
            'prodLastModified' => 'required|date',
        ]);
    
        $product->prodName = $request->get('prodName');
        $product->prodDesc = $request->get('prodDesc');
    
        if ($request->hasFile('prodImageURL')) {
            $imageContent = file_get_contents($request->file('prodImageURL')->getRealPath());
            $encodedImage = base64_encode($imageContent);
            $product->prodImageURL = $encodedImage;
        }
    
        $product->prodLastModified = $request->get('prodLastModified');
        $product->save();
    
        // Debugging line to check if product was updated successfully
        if (!$product->wasChanged()) {
            dd('Product was not updated', $product->toArray());
        }
    
        return redirect()->route('admin.dashboard')->with('success', 'Product updated successfully.');
    }
    

    public function destroy($id)
    {
        //dd("Destroy method called with ID: " . $id);
        $product = Product::findOrFail($id);
        $product->delete();

        return redirect()->route('admin.dashboard')->with('success', 'Product deleted successfully.');
    }



    
}