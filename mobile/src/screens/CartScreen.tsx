// src/screens/CartScreen.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

const CartScreen: React.FC = () => {
  // Sample cart data (you can replace this with data fetched from your backend or state)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: '1', name: 'Apples', price: 2.5, quantity: 3 },
    { id: '2', name: 'Bananas', price: 1.2, quantity: 5 },
    { id: '3', name: 'Carrots', price: 0.8, quantity: 4 },
  ]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    // Logic for handling checkout (you can expand this functionality)
    alert('Proceeding to checkout');
  };

  const renderCartItem = ({ item }: { item: CartItem }) => (
    <View style={styles.cartItem}>
      <Text style={styles.itemText}>{item.name} (x{item.quantity})</Text>
      <Text style={styles.itemText}>${(item.price * item.quantity).toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderCartItem}
        ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty</Text>}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${getTotalPrice()}</Text>
      </View>
      <Button title="Checkout" onPress={handleCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  itemText: {
    fontSize: 18,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#999',
    marginTop: 20,
  },
  totalContainer: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default CartScreen;