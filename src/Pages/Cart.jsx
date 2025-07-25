// src/components/Cart/Cart.jsx
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './Cart.css'; // Import the dedicated CSS file

const Cart = () => {
    // Refs for GSAP animations
    const cartContainerRef = useRef(null);
    const cartItemsRefs = useRef([]); // To hold refs for each cart item
    const subtotalRef = useRef(null);
    const discountRef = useRef(null);
    const totalRef = useRef(null);
    const discountLineRef = useRef(null);
    const promoMessageRef = useRef(null);
    const savedAddressDisplayRef = useRef(null);
    const selectedPaymentMessageRef = useRef(null);

    // Dummy data for UI rendering (replace with actual state in a real app)
    const [cartItems, setCartItems] = useState([
        { id: 'p1', name: 'Echo Dot (5th Gen, 2022 release) with Alexa | Smart speaker with Bigger sound, deeper bass & Zero Lag response', price: 4999.00, quantity: 1, image: 'https://m.media-amazon.com/images/I/61+-h+c3E0L._AC_SL1500_.jpg' },
        { id: 'p2', name: 'HP Laptop 15s, 12th Gen Intel Core i5-1235U, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD', price: 54990.00, quantity: 1, image: 'https://m.media-amazon.com/images/I/71f5qtjX5EL._AC_SL1500_.jpg' },
        { id: 'p3', name: 'Amazon Basics Soft & Absorbent Cotton Bath Towel for Bathroom - (600 GSM, 70 x 140 cm) - Dark Grey', price: 549.00, quantity: 2, image: 'https://m.media-amazon.com/images/I/61kYyQY5hCL._AC_SL1500_.jpg' },
        { id: 'p4', name: 'Samsung Galaxy M14 5G (Icy Silver, 4GB, 128GB) | 50MP Triple Cam | 6000 mAh Battery', price: 12999.00, quantity: 1, image: 'https://m.media-amazon.com/images/I/81fxuNf+gTL._AC_SL1500_.jpg' },
        { id: 'p5', name: 'JBL C100SI Wired In Ear Headphones with Mic (Black)', price: 699.00, quantity: 3, image: 'https://m.media-amazon.com/images/I/61R1w5nE0VL._AC_SL1500_.jpg' },
        { id: 'p6', name: 'Redmi 13C (Stardust Black, 4GB RAM, 128GB Storage)', price: 7999.00, quantity: 1, image: 'https://m.media-amazon.com/images/I/71d1V2-j+5L._AC_SL1500_.jpg' },
        { id: 'p7', name: 'boAt Airdopes 141 ANC TWS Earbuds with 32dB ANCTM, 42 Hours Playtime, BEASTTM Mode(White Dawn)', price: 1999.00, quantity: 1, image: 'https://m.media-amazon.com/images/I/61XzI4O7xJL._AC_SL1500_.jpg' },
        { id: 'p8', name: 'Fire-Boltt Phoenix Ultra Smart Watch 1.39" AMOLED Display', price: 2999.00, quantity: 1, image: 'https://m.media-amazon.com/images/I/71Y+w6+oY-L._AC_SL1500_.jpg' },
    ]);
    const [subtotal, setSubtotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [total, setTotal] = useState(0);
    const [promoCodeInput, setPromoCodeInput] = useState('');
    const [promoMessage, setPromoMessage] = useState('');
    const [isAddressSaved, setIsAddressSaved] = useState(true); // Pre-fill address for UI demo
    const [addressDetails, setAddressDetails] = useState({
        fullName: 'Rahul Sharma',
        line1: '123, Silver Oak Apartments',
        line2: 'Near City Center',
        city: 'Mumbai',
        state: 'Maharashtra',
        zip: '400001'
    });
    const [selectedPayment, setSelectedPayment] = useState('upi'); // Pre-select payment for UI demo

    const paymentOptions = [
        { id: 'upi', name: 'UPI/Net Banking', logo: 'https://m.media-amazon.com/images/G/31/payments-cbcc/icon_upi._CB485923985_.png' },
        { id: 'credit-card', name: 'Credit/Debit Card', logo: 'https://m.media-amazon.com/images/G/31/payments-cbcc/icon_credit_debit._CB485923985_.png' },
        { id: 'cod', name: 'Cash on Delivery', logo: 'https://m.media-amazon.com/images/G/31/payments-cbcc/icon_cash_delivery._CB485923985_.png' },
    ];

    // --- GSAP Animations ---

    // Initial cart container animation
    useEffect(() => {
        if (cartContainerRef.current) {
            gsap.from(cartContainerRef.current, { duration: 0.8, y: 30, opacity: 0, ease: "power3.out" });
        }
    }, []);

    // Animate item entry/re-render
    useEffect(() => {
        gsap.fromTo(
            cartItemsRefs.current,
            { opacity: 0, x: -10 },
            {
                duration: 0.3,
                opacity: 1,
                x: 0,
                ease: "power2.out",
                stagger: 0.08, // Stagger animation for each item
                overwrite: true
            }
        );
    }, [cartItems]); // Re-run when cartItems change

    // Simulate calculations and animations for totals
    useEffect(() => {
        let currentSubtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        let currentDiscount = 0;
        let currentTotal = currentSubtotal;
        let msg = '';

        const promoCodeUpper = promoCodeInput.toUpperCase();
        if (promoCodeUpper === 'AMAZON20') {
            currentDiscount = currentSubtotal * 0.20; // 20% off
            msg = 'Promo code AMAZON20 applied! (20% off)';
        } else if (promoCodeUpper === 'FREEDELIVERY') {
            currentDiscount = 100; // Flat discount
            msg = 'Promo code FREEDELIVERY applied! (₹100 off)';
        } else if (promoCodeInput) {
            msg = 'Invalid promo code.';
        }
        
        currentTotal = currentSubtotal - currentDiscount;

        setSubtotal(currentSubtotal);
        setDiscount(currentDiscount);
        setTotal(currentTotal);
        setPromoMessage(msg);

        // Animate price updates
        gsap.to(subtotalRef.current, {
            duration: 0.4,
            textContent: currentSubtotal.toFixed(2),
            ease: "power1.out",
            snap: { textContent: 0.01 },
            onUpdate: function() {
                if (subtotalRef.current) subtotalRef.current.textContent = `₹${parseFloat(subtotalRef.current.textContent).toFixed(2)}`;
            }
        });
        gsap.to(discountRef.current, {
            duration: 0.4,
            textContent: currentDiscount.toFixed(2),
            ease: "power1.out",
            snap: { textContent: 0.01 },
            onUpdate: function() {
                if (discountRef.current) discountRef.current.textContent = `-₹${parseFloat(discountRef.current.textContent).toFixed(2)}`;
            }
        });
        gsap.to(totalRef.current, {
            duration: 0.4,
            textContent: currentTotal.toFixed(2),
            ease: "power2.out",
            snap: { textContent: 0.01 },
            onUpdate: function() {
                if (totalRef.current) totalRef.current.textContent = `₹${parseFloat(totalRef.current.textContent).toFixed(2)}`;
            }
        });

        // Animate discount line visibility
        if (discountLineRef.current) {
            if (currentDiscount > 0) {
                gsap.to(discountLineRef.current, { duration: 0.2, opacity: 1, height: 'auto', display: 'flex', ease: "power2.out" });
            } else {
                gsap.to(discountLineRef.current, { duration: 0.2, opacity: 0, height: 0, display: 'none', ease: "power2.in" });
            }
        }
    }, [cartItems, promoCodeInput]);

    // Animate promo message visibility
    useEffect(() => {
        if (promoMessageRef.current && promoMessage) {
            gsap.fromTo(promoMessageRef.current, { opacity: 0, y: 5 }, { duration: 0.2, opacity: 1, y: 0, clearProps: 'all' });
        }
    }, [promoMessage]);

    // Animate saved address display
    useEffect(() => {
        if (savedAddressDisplayRef.current && isAddressSaved) {
            gsap.fromTo(savedAddressDisplayRef.current,
                { y: 10, opacity: 0 },
                { duration: 0.4, y: 0, opacity: 1, ease: "power2.out", clearProps: 'all' }
            );
        }
    }, [isAddressSaved]);

    // Animate selected payment message
    useEffect(() => {
        if (selectedPaymentMessageRef.current && selectedPayment) {
            gsap.fromTo(selectedPaymentMessageRef.current, { opacity: 0, y: 5 }, { duration: 0.2, opacity: 1, y: 0 });
        }
    }, [selectedPayment]);

    // --- Dummy Handlers (for UI interaction, don't modify state in a real app) ---
    const handleQuantityChange = (id, change) => {
        const itemElement = cartItemsRefs.current.find(el => el && el.dataset.id === id);
        if (itemElement) {
            const quantitySpan = itemElement.querySelector('.item-quantity-controls select');
            if (quantitySpan) {
                gsap.to(quantitySpan, { duration: 0.15, scale: 1.05, yoyo: true, repeat: 1, onComplete: () => {
                    setCartItems(prevItems => prevItems.map(item =>
                        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
                    ));
                    console.log(`Simulating quantity change for ${id}: ${change}`);
                }});
            }
        }
    };

    const handleRemoveItem = (id) => {
        const itemElement = cartItemsRefs.current.find(el => el && el.dataset.id === id);
        if (itemElement) {
            gsap.to(itemElement, {
                duration: 0.4,
                opacity: 0,
                x: -30,
                ease: "power2.in",
                onComplete: () => {
                    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
                    console.log(`Simulating item removal for ${id}`);
                }
            });
        }
    };

    const handleApplyPromo = () => {
        console.log('Attempting to apply promo code:', promoCodeInput);
    };

    const handleAddressSubmit = (e) => {
        e.preventDefault();
        setIsAddressSaved(true);
        console.log('Address saved (simulated):', addressDetails);
    };

    const handlePaymentSelect = (mode) => {
        setSelectedPayment(mode);
        console.log('Payment mode selected:', mode);
    };

    const handleCheckout = () => {
        alert('Simulating checkout! (UI only)');
        console.log('Checkout initiated (simulated)');
    };

    return (
        <div className="cart-page-wrapper">
            <div className="cart-container" ref={cartContainerRef}>
                <div className="cart-main-content">
                    <h2 className="cart-title">Shopping Cart</h2>

                    <div className="cart-items-scrollable-area"> {/* This will be the scrollable div */}
                        {cartItems.length === 0 ? (
                            <p className="empty-cart-message">Your cart is empty.</p>
                        ) : (
                            cartItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="cart-item"
                                    data-id={item.id}
                                    ref={el => cartItemsRefs.current[index] = el}
                                >
                                    <div className="item-image-wrapper">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="item-details">
                                        <p className="item-name">{item.name}</p>
                                        <p className="item-price">₹{item.price.toFixed(2)}</p>
                                        <div className="item-quantity-controls">
                                            <label htmlFor={`qty-${item.id}`}>Qty:</label>
                                            <select
                                                id={`qty-${item.id}`}
                                                value={item.quantity}
                                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) - item.quantity)}
                                            >
                                                {[...Array(10).keys()].map(i => (
                                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                                ))}
                                            </select>
                                            <span className="separator">|</span>
                                            <button className="delete-item-btn" onClick={() => handleRemoveItem(item.id)}>Delete</button>
                                        </div>
                                    </div>
                                    <div className="item-total-price">₹{(item.price * item.quantity).toFixed(2)}</div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="cart-summary-main">
                        <div className="subtotal-info">
                            Subtotal ({cartItems.length} items): <span className="subtotal-amount" ref={subtotalRef}>₹{subtotal.toFixed(2)}</span>
                        </div>
                        {discount > 0 && (
                            <div className="discount-info" ref={discountLineRef} style={{display: discount > 0 ? 'flex' : 'none'}}>
                                Discount: <span className="discount-amount" ref={discountRef}>-₹{discount.toFixed(2)}</span>
                            </div>
                        )}
                        <div className="total-info">
                            Grand Total: <span className="total-amount" ref={totalRef}>₹{total.toFixed(2)}</span>
                        </div>
                        <p className="free-shipping-note">Your order is eligible for FREE Delivery.</p>
                        <button className="proceed-to-checkout-btn" onClick={handleCheckout}>Proceed to checkout</button>
                    </div>
                </div>

                <div className="cart-sidebar">
                    <div className="order-summary-box">
                        <div className="subtotal-info">
                            Subtotal ({cartItems.length} items): <span className="subtotal-amount" ref={subtotalRef}>₹{subtotal.toFixed(2)}</span>
                        </div>
                        {discount > 0 && (
                            <div className="discount-info" ref={discountLineRef} style={{display: discount > 0 ? 'flex' : 'none'}}>
                                Discount: <span className="discount-amount" ref={discountRef}>-₹{discount.toFixed(2)}</span>
                            </div>
                        )}
                        <div className="total-info">
                            Grand Total: <span className="total-amount" ref={totalRef}>₹{total.toFixed(2)}</span>
                        </div>
                        <p className="free-shipping-note">Your order is eligible for FREE Delivery.</p>
                        <button className="proceed-to-checkout-btn" onClick={handleCheckout}>Proceed to checkout</button>
                    </div>

                   

                    <div className="address-payment-box">
                        <h4>Delivery Address</h4>
                        {!isAddressSaved ? (
                            <form className="address-form" onSubmit={handleAddressSubmit}>
                                <input type="text" placeholder="Full Name" value={addressDetails.fullName} onChange={(e) => setAddressDetails({...addressDetails, fullName: e.target.value})} required />
                                <input type="text" placeholder="Address Line 1" value={addressDetails.line1} onChange={(e) => setAddressDetails({...addressDetails, line1: e.target.value})} required />
                                <input type="text" placeholder="Address Line 2 (Optional)" value={addressDetails.line2} onChange={(e) => setAddressDetails({...addressDetails, line2: e.target.value})} />
                                <input type="text" placeholder="City" value={addressDetails.city} onChange={(e) => setAddressDetails({...addressDetails, city: e.target.value})} required />
                                <input type="text" placeholder="State" value={addressDetails.state} onChange={(e) => setAddressDetails({...addressDetails, state: e.target.value})} required />
                                <input type="text" placeholder="Zip Code" value={addressDetails.zip} onChange={(e) => setAddressDetails({...addressDetails, zip: e.target.value})} required />
                                <button type="submit" className="action-button primary-button">Save Address</button>
                            </form>
                        ) : (
                            <div className="saved-address-display" ref={savedAddressDisplayRef}>
                                <p className="address-line">**Deliver to {addressDetails.fullName}**</p>
                                <p className="address-line">{addressDetails.line1}, {addressDetails.line2}</p>
                                <p className="address-line">{addressDetails.city}, {addressDetails.state} {addressDetails.zip}</p>
                                <button className="action-button secondary-button" onClick={() => setIsAddressSaved(false)}>Change Address</button>
                            </div>
                        )}

                        <h4>Payment Mode</h4>
                        <div className="payment-options">
                            {paymentOptions.map(option => (
                                <button
                                    key={option.id}
                                    className={`payment-btn ${selectedPayment === option.id ? 'selected' : ''}`}
                                    onClick={() => handlePaymentSelect(option.id)}
                                >
                                    <img src={option.logo} alt={option.name} />
                                    <span>{option.name}</span>
                                </button>
                            ))}
                        </div>
                        {selectedPayment && (
                            <p ref={selectedPaymentMessageRef} className="selected-payment-message">
                                You've selected <span style={{fontWeight: 'bold'}}>{selectedPayment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;