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

let stack1 = new Stack();

stack1.pushToList("S2 E6: Building a Brand","Business / Self development","N/A","https://www.buzzsprout.com/161282/844662-s2-e6-building-a-brand.mp3?blob_id=1389144","You know we love a good brand story, and as it turns out, a solid brand is probably the number 1 piece of the puzzle that’s lending to the success of Almanac Supply Co. So in this episode of Making a Business, we're digging into how Emily has established a brand for her business—what this means for her personal brand, how she's gathered community around it, and the importance of maintaining professionalism while still being personable as a retail business owner.");
stack1.pushToList("S2 E5: The Dark Side of Product Business","Business / Self development","N/A","https://www.buzzsprout.com/161282/841812-s2-e5-the-dark-side-of-product-business.mp3?blob_id=1376227","Okay, so if you think building a product-based business sounds super dreamy, we're here to get real and talk about the darker side of product and retail business. In this episode of Making a Business, we're digging into consumerism, waste, and the ever-lurking copycat.");
stack1.pushToList("S2 E4: Sourcing + Curating Products","Business / Self development","N/A","https://www.buzzsprout.com/161282/832787-s2-e4-sourcing-curating-products.mp3?blob_id=1333158","When you're a product-based business, one of the biggest hurdles is sourcing materials and managing stock and inventory. In today's Making a Business episode, we're digging into what you need to consider when searching for a source for your raw materials, curating a shop and selling other makers' goods, and ordering and maintaining stock as a business owner.");


function empiler(){
	stack1.pushToList(document.getElementById("Ename").value,document.getElementById("categ").value,document.getElementById("guest").value,document.getElementById("eplink").value,document.getElementById("epdesc").value);
	printElement();

}



function Next(){
	stack1.next();
	document.getElementById("result1").innerHTML = stack1.dispElement();
}

function Prev(){
	stack1.previous();
	document.getElementById("result1").innerHTML = stack1.dispElement();

}

function printElement(){
	document.getElementById("result1").innerHTML = stack1.dispElement();
}
