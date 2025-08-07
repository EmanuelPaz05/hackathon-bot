function categorizeData(inputData) {
    // Example categorization logic
    const categories = {
        'category1': ['keyword1', 'keyword2'],
        'category2': ['keyword3', 'keyword4'],
        // Add more categories and keywords as needed
    };

    const results = {};

    for (const category in categories) {
        results[category] = inputData.filter(item => 
            categories[category].some(keyword => item.includes(keyword))
        );
    }

    return results;
}

module.exports = {
    categorizeData
};