const express = require('express');
const request = require('request');
const router = express.Router();
const axios = require('axios');

const calculate_weekly_average = () => {
    // Define the logic to calculate the weekly average
    console.log("calculate_weekly_average");
    // Replace with actual calculation logic
    return 0;
};

const predict = (req, res) => {
    const weekly_average_rf = calculate_weekly_average();
    const r2_hourly = 0.91;
    const r2_weekly = 0.90;

    const response = {
        weekly_average: weekly_average_rf,
        performance_metrics: {
            r2_hourly: r2_hourly,
            r2_weekly: r2_weekly
        }
    };

    console.log(response);
    res.json(response);
};
router.get('/getPrediction', async (req, res) => {
    try {
        const flaskResponse = await axios.get('http://127.0.0.1:5000/predict');
        res.json(flaskResponse.data);
    } catch (error) {
        console.error('Error fetching data from Flask app:', error);
        res.status(500).send('Error fetching data from Flask app');
    }
});

router.get('/getR2Prediction', async (req, res) => {
    try {
        const flaskResponse = await axios.get('http://127.0.0.1:5000/predict2');
        res.json(flaskResponse.data);
    } catch (error) {
        console.error('Error fetching data from Flask app:', error);
        res.status(500).send('Error fetching data from Flask app');
    }
});


module.exports = router;