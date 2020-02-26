class Element {
	constructor(Ename,categ,guest,eplink,epdesc,next = null,prev = null){
        this.Ename=Ename;
        this.categ=categ;
        this.guest=guest;
        this.eplink=eplink;
        this.epdesc=epdesc;
		this.next=next;
		this.prev=prev;
	}
}

class Stack {
	constructor(){
		this.length=0;
		this.head=null;
		this.tail=null;
		this.pointer = null;

	}

	pushToList(Ename,categ,guest,eplink,epdesc){
		var element = new Element(Ename,categ,guest,eplink,epdesc);
		if(this.length==0){
			this.pointer  = this.tail =  this.head  = element;
			
		}else
		{
			this.tail.next = element;
			element.prev = this.tail;
			this.tail=element;
			
		}

		this.length++;
		return element;

	}

	

	next(){
		if(this.pointer && this.pointer.next){
			this.pointer = this.pointer.next;
		}


	}

	previous(){
		if(this.pointer && this.pointer.prev){
			this.pointer = this.pointer.prev;
		}
	}

	dispElement(){
		if(this.pointer){
			return '<center><p class="text-ourpodcasts">' +this.pointer.Ename+ '</p></center><div><center><p style="color: black; margin-top: 80px;" class="epdesc">'
			+this.pointer.epdesc+'<br>'+'Category:'+this.pointer.categ+'<br>'+'Guests:'+this.pointer.guest+'<br></p></center></div><div class="audio-episodes"> <button onclick="Prev()"> <i class="fas fa-chevron-left"></i></button><audio controls src="'+this.pointer.eplink+'"></audio><button onclick="Next()"><i class="fas fa-chevron-right"></i></button></div>';
		} else return "No Data";
	}



}

let stack2 = new Stack();

stack2.pushToList("Being Boss NOLA 2017 Recap","Business","N/A","https://www.buzzsprout.com/174545/2447297-being-boss-nola-2017-recap.mp3?blob_id=8037281","We just got back from our Being Boss New Orleans Vacation 2017, so let's talk about it! We had so many favorite moments meeting our bosses in-person, we've got some solid key takeaways now that the vacation is over, and we're sharing some of the nuggets of wisdom we got from our tarot card readings while we were in New Orleans.");
stack2.pushToList("How to Find Brand Ambassadors","Business","N/A","https://www.buzzsprout.com/174545/2138003-how-to-find-brand-ambassadors.mp3?blob_id=6676364","Are you looking for brand ambassadors for your business? Today we're talking all about Brand Ambassadors—the people who share and help promote your brand, and how to find the right ones to showcase your business and brand.");
stack2.pushToList("How to Hire a Coach","Business","N/A","https://www.buzzsprout.com/174545/2137946-how-to-hire-a-coach.mp3?blob_id=6675992","We think that all business owners should work with a coach at some point. So we're talking all about how to hire a coach, what questions to ask, how much you can expect to pay, and how it works.");


function empiler(){
	stack2.pushToList(document.getElementById("Ename").value,document.getElementById("categ").value,document.getElementById("guest").value,document.getElementById("eplink").value,document.getElementById("epdesc").value);
	printElement();

}



function Next(){
	stack2.next();
	document.getElementById("result3").innerHTML = stack2.dispElement();
}

function Prev(){
	stack2.previous();
	document.getElementById("result3").innerHTML = stack2.dispElement();

}

function printElement(){
	document.getElementById("result3").innerHTML = stack2.dispElement();
}
