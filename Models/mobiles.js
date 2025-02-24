const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema({
    brand_name: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number },
    has_5g: { type: Boolean, default: false },
    has_nfc: { type: Boolean, default: false },
    has_ir_blaster: { type: Boolean, default: false },
    processor_brand: { type: String },
    num_cores: { type: Number },
    processor_speed: { type: Number }, // in GHz
    battery_capacity: { type: Number }, // in mAh
    charging_speed: { type: Number }, // in Watts
    fast_charging: { type: Boolean, default: false },
    ram: { type: Number }, // in GB
    storage: { type: Number }, // in GB
    screen_size: { type: Number }, // in inches
    refresh_rate: { type: Number }, // in Hz
    resolution: { type: String },
    num_rear_cameras: { type: Number },
    num_front_cameras: { type: Number },
    os: { type: String },
    primary_camera_rear: { type: Number }, // in MP
    primary_camera_front: { type: Number }, // in MP
    extended_memory_available: { type: Boolean, default: false },
    extended_upto: { type: Number } // in GB
});

const Mobile = mongoose.model('MobileCollection', mobileSchema);

module.exports = Mobile;
