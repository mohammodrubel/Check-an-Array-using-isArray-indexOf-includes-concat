const friends=['akash','nafis','emrul','hasibHasan','rubel','fardinTazbeed','hashem','kashem','mohammodruebl']

    function megaFriends(friends){
        if(Array.isArray(friends)== false){
            return 'Please enter a array Or string ';
        }
        let singlefriend = friends[0]
            for (var friend of friends){
                if (friend.length > singlefriend.length){
                    singlefriend = friend
                }
            }
        return singlefriend
    }
    let myBigFriend = megaFriends(friends)
    // console.log(myBigFriend)
        // error throw 
            // find name 
            // check Array

            if (friends.indexOf('NASRIN')!= -1){
                console.log('EXIST YOUR VALUE')
            }else{
                console.log('Not EXIST YOUR VALUE')
            }
    // same eror throw 
    if (friends.includes('noman')){
        console.log('your value exist')
    }else{
        console.log('your value not exist')
    }
