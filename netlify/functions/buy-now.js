const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Parse request body
        const { amount } = JSON.parse(event.body);

        // Validate amount
        const validAmounts = [19, 29, 59];
        if (!validAmounts.includes(amount)) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid amount' })
            };
        }

        // Exchange pool API
        const poolApiUrl = 'https://simpleswap-automation-1.onrender.com';
        const merchantWallet = '0x1372Ad41B513b9d6eC008086C03d69C635bAE578';

        // Create exchange request
        const response = await fetch(`${poolApiUrl}/create-exchange`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: amount,
                wallet: merchantWallet,
                currency: 'USD'
            })
        });

        if (!response.ok) {
            throw new Error(`Pool API error: ${response.status}`);
        }

        const data = await response.json();

        // Return exchange URL
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify({
                success: true,
                exchange_url: data.exchange_url || `https://simpleswap.io/exchange?from=usd-usd&to=pol-matic&amount=${amount}`,
                exchange_id: data.exchange_id,
                amount: amount
            })
        };

    } catch (error) {
        console.error('Checkout error:', error);

        // Fallback to SimpleSwap direct
        const { amount } = JSON.parse(event.body);
        const timestamp = new Date().getTime();

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify({
                success: true,
                exchange_url: `https://simpleswap.io/exchange?from=usd-usd&to=pol-matic&amount=${amount}`,
                exchange_id: `fallback-${timestamp}`,
                amount: amount,
                fallback: true
            })
        };
    }
};
