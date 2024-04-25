const chokidar = require('chokidar')
const fs = require('fs')

const filePath = 'mock.json'

// Initialize watcher
const watcher = chokidar.watch(filePath)

// Add event listeners
watcher.on('change', path => {
    console.log(`File ${path} has been changed`)

    // Read the updated JSON file
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err)
            return
        }

        const jsonData = JSON.parse(data)

        // Process JSON data as needed
        console.log(jsonData)
        console.log('\n')
    })
})

watcher.on('add', path => {
    console.log('\nThe app is now listening for changes...\n')

    console.log(`File ${path} has been added`)

    // Read the updated JSON file
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err)
            return
        }

        const jsonData = JSON.parse(data)

        // Process JSON data as needed
        console.log(jsonData)
        console.log('\n')
    })
})