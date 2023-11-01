document.getElementById('createStationForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const stationName = document.getElementById('stationName').value;
    const stationLocation = document.getElementById('stationLocation').value;

    try {
        const response = await fetch('/api/stations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                stationName,
                stationLocation
            })
        });

        const data = await response.json();
        if (response.ok) {
            alert('Station created successfully!');
            console.log(data);
        } else {
            alert('Error: ' + data.error);
        }
    } catch (error) {
        alert('Failed to create station.');
        console.error(error);
    }
});

document.getElementById('editStationForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const stationId = document.getElementById('editStationId').value;
    const newLocation = document.getElementById('editStationLocation').value;

    try {
        const response = await fetch(`/api/stations/${stationId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                stationLocation: newLocation
            })
        });

        const data = await response.json();
        if (response.ok) {
            alert('Station updated successfully!');
            console.log(data);
        } else {
            alert('Error: ' + data.error);
        }
    } catch (error) {
        alert('Failed to update station.');
        console.error(error);
    }
});

document.getElementById('deleteStationForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const stationId = document.getElementById('deleteStationId').value;

    try {
        const response = await fetch(`/api/stations/${stationId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            alert('Station deleted successfully!');
        } else {
            const data = await response.json();
            alert('Error: ' + data.error);
        }
    } catch (error) {
        alert('Failed to delete station.');
        console.error(error);
    }
});

function generateRandomRecord() {
    return {
        temperature: (Math.random() * 10 + 20).toFixed(2), // 20.00 to 30.00
        humidity: Math.floor(Math.random() * 100), // 0 to 100
        pressure: (Math.random() * 10 + 990).toFixed(2), // 990.00 to 1000.00
        precipitationsPerMinute: Math.random().toFixed(2), // 0.00 to 1.00
        acumulatedPrecipitations: Math.random().toFixed(2), // 0.00 to 1.00
        windDirection: ['N', 'S', 'E', 'W'][Math.floor(Math.random() * 4)],
        windForce: ['Calmo', 'Moderado', 'Fuerte'][Math.floor(Math.random() * 3)],
        windSpeed: Math.floor(Math.random() * 100), // 0 to 100
        height: (Math.random() * 100).toFixed(2) // 0.00 to 100.00
    };
}

document.getElementById('addRandomRecordForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const stationId = document.getElementById('stationIdForRecord').value;
    const randomRecord = generateRandomRecord();
    randomRecord.station = stationId;

    try {
        const response = await fetch('/api/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(randomRecord)
        });

        const data = await response.json();
        if (response.ok) {
            alert('Random record added successfully!');
            console.log(data);
        } else {
            alert('Error: ' + data.error);
        }
    } catch (error) {
        alert('Failed to add random record.');
        console.error(error);
    }
});
