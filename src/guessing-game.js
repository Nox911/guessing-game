class GuessingGame {
  constructor(max,min,rez) {
   	this.max =max;
    this.min=min;
    this.rez=rez;
  }

  setRange(min, max) {
    return this.min = min, this.max=max;   	
  }

  guess() {
    if(((this.max + this.min)%2)==0) {
    	return this.rez=(this.max + this.min)/2; 
   	}
   	else {
    	return this.rez = parseInt((this.max + this.min)/2)+1;
   	}
   }

  lower() {
    if(((this.max + this.min)%2)==0) {
			return this.max=(this.max + this.min)/2;
  	}
  	else {
  		return this.max = parseInt((this.max + this.min)/2)+1;
  	}
	}

  greater() {
    if(((this.max + this.min)%2)==0) {
    	return this.min = (this.max + this.min)/2;
    }
    else {
    	return this.min = parseInt((this.max + this.min)/2)+1;
    }
  }
}

module.exports = GuessingGame;
