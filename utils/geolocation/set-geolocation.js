const setGeoLocation = async (client, object) => {
    return await client.setGeoLocation({
        altitude: 0,
        latitude: 0,
        longitude:0, 
        ...object
    })
}

module.exports = {
    Android: setGeoLocation,
    iOS: setGeoLocation
}