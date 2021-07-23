class Player
{
    constructor()
    {

    }

    getCount()  //This function will read the playerCount value from the database (read)
    {
        var playerCountRef = db.ref('playerCount');
        playerCountRef.on("value", function(data){playerCount = data.val()});
    }

    updateCount(count) // This function will update the playerCount value in the database (write)
    {
        db.ref('/').update({playerCount: count}); // '/' refers to main database inside which playerCount is created
    }
};