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


let stack = new Stack();



stack.pushToList("#223 - Social Media Marketing for Online and Local Business with Ellen Matis","Business","N/A","https://www.buzzsprout.com/37702/2668951-223-social-media-marketing-for-online-and-local-business-with-ellen-matis.mp3?blob_id=9158407","Boss friend Ellen Matis joins Emily in this episode to talk about creating boundaries for social media, the impact that local community involvement can have on your life and business, and why it's important to invest in your community and neighbors....");
stack.pushToList("#222 - Productivity Hacks","Business","N/A","https://www.buzzsprout.com/37702/2568043-222-productivity-hacks.mp3?blob_id=8524084","Being productive can be a challenge. In fact, a majority of Being Boss subscribers admit that time management is their biggest struggle. Emily and Kathleen team up in this episode to share their tips, resources, and hacks they use to better manage their workload, which includes how they handle distractions, how they deal with emails and tasks, and why they track their time. They even break down their day-to-day routines to show how they structure their work and life to maximize their efficiency.");
stack.pushToList("#221 - Plan a Happy Life with Stephanie Fleming of Happy Planner","Business","N/A","https://www.buzzsprout.com/37702/2488393-221-plan-a-happy-life-with-stephanie-fleming-of-happy-planner.mp3?blob_id=8185991","A happy life doesn’t just fall in your lap, so we're bringing in Stephanie Fleming of The Happy Planner today to talk with us about how to plan out your happy life. We're also talking about navigating pivotal life moments, cultivating happiness and creative freedom, fraudy feelings, and so much more.");

function empiler(){
	stack.pushToList(document.getElementById("Ename").value,document.getElementById("categ").value,document.getElementById("guest").value,document.getElementById("eplink").value,document.getElementById("epdesc").value);
	printElement();

}



function Next(){
	stack.next();
	document.getElementById("result").innerHTML = stack.dispElement();
}

function Prev(){
	stack.previous();
	document.getElementById("result").innerHTML = stack.dispElement();

}

function printElement(){
	document.getElementById("result").innerHTML = stack.dispElement();
}







