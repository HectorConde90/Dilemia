import Concert from './model.js';

class ConcertDAO {

    constructor() { }
    
    list(){
        return Concert.find().sort({_id: -1});
    }

   create(concert){
       return new Concert(concert).save();
   }

    delete(id) {
        return Concert.deleteOne({ _id: id });
    }

}

export default new ConcertDAO();