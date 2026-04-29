# Maps API Documentation

## Overview
The NextRide application uses OpenStreetMap's Nominatim API for geocoding services. This free API converts addresses into geographic coordinates (latitude and longitude) without requiring API keys or authentication.

## API Service Details

### Provider
- **Name:** Nominatim (OpenStreetMap)
- **Base URL:** `https://nominatim.openstreetmap.org`
- **Cost:** Completely free
- **Rate Limit:** 1 request per second
- **Data Source:** OpenStreetMap (crowd-sourced geographic data)

### Features
- Address to coordinates conversion (geocoding)
- Global coverage
- No API key required
- JSON response format

## Backend Implementation

### Files Involved
- `Routes/maps.routes.js` - Route definitions
- `Controller/maps.controller.js` - Request handling
- `Services/maps.service.js` - API integration logic

### Endpoint

#### GET /maps/get-coordinates
Retrieves geographic coordinates for a given address.

**Authentication:** Required (User JWT token)

**Parameters:**
- `address` (query string, required) - The address to geocode (minimum 5 characters)

**Request Example:**
```
GET /maps/get-coordinates?address=New%20York
Authorization: Bearer <jwt_token>
```

**Success Response (200):**
```json
{
  "lat": 40.7127281,
  "lng": -74.0060152
}
```

**Error Response (404):**
```json
{
  "error": "Failed to fetch coordinates"
}
```

**Validation:**
- Address must be at least 5 characters long
- User must be authenticated

## Technical Implementation

### Service Layer (`maps.service.js`)
```javascript
const axios = require('axios');

module.exports.getAddressCoordinates = async (address) => {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodedAddress}&limit=1`;

    try {
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'NextRide-App/1.0'
            }
        });

        if (response.data && response.data.length > 0) {
            const location = response.data[0];
            return {
                lat: parseFloat(location.lat),
                lng: parseFloat(location.lon)
            };
        } else {
            throw new Error(`Unable to fetch coordinates for address: ${address}`);
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        throw error;
    }
};
```

### Key Implementation Notes
- **User-Agent Header:** Required by Nominatim API policy
- **Limit Parameter:** Set to 1 to get only the best match
- **Error Handling:** Comprehensive error catching and logging
- **Data Parsing:** Converts string coordinates to floats

## Testing Results

The API has been tested with various locations:

| Location | Latitude | Longitude | Status |
|----------|----------|-----------|--------|
| New York | 40.7127281 | -74.0060152 | ✅ |
| Los Angeles | 34.0536909 | -118.242766 | ✅ |
| London | 51.5074456 | -0.1277653 | ✅ |
| Tokyo | 35.6768601 | 139.7638947 | ✅ |

## Usage in Frontend

To use this API in the frontend, make authenticated requests:

```javascript
const response = await fetch('/maps/get-coordinates?address=' + encodeURIComponent(address), {
    headers: {
        'Authorization': `Bearer ${userToken}`
    }
});

const coordinates = await response.json();
// coordinates: { lat: number, lng: number }
```

## Limitations

1. **Rate Limiting:** 1 request per second per IP
2. **Usage Policy:** Must include User-Agent header
3. **Data Accuracy:** Depends on OpenStreetMap data quality
4. **No Reverse Geocoding:** Only address-to-coordinates (not coordinates-to-address)

## Migration from Google Maps

This implementation replaces the previous Google Maps Geocoding API:

- **Before:** Required Google API key and billing setup
- **After:** Completely free, no setup required
- **Compatibility:** Same response format maintained
- **Performance:** Slightly slower due to rate limiting, but sufficient for ride-booking app

## Future Enhancements

Potential improvements:
- Caching layer for frequently requested addresses
- Batch geocoding for multiple addresses
- Reverse geocoding (coordinates to address)
- Alternative API fallbacks
- Rate limiting middleware</content>
<parameter name="filePath">c:\Users\Acer.DESKTOP-DT58C5N\OneDrive\Projects\Next-ride app\BACK-END\MAPS_API.md