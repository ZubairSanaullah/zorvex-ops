const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log('MongoDB connection error:', err));

// Models
const ConsultationSchema = new mongoose.Schema({
    name: String,
    email: String,
    company: String,
    service: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});

const Consultation = mongoose.model('Consultation', ConsultationSchema);
const ContactMessage = mongoose.model('ContactMessage', ContactSchema);

// Routes
app.post('/api/consultation', async (req, res) => {
    try {
        const newConsultation = new Consultation(req.body);
        await newConsultation.save();
        res.status(201).json({ success: true, message: 'Consultation booked successfully!' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error saving consultation', error: err.message });
    }
});

app.post('/api/contact', async (req, res) => {
    try {
        const newMessage = new ContactMessage(req.body);
        await newMessage.save();
        res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error saving contact message', error: err.message });
    }
});

app.get('/', (req, res) => {
    res.send('Zorvex Ops API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
