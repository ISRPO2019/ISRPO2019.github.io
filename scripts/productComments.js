function commentCreate(id, product) {
	let commentDiv = document.createElement('div');
	commentDiv.setAttribute('id', id);
	var commentMainDiv = product.comments[id].reply_to? document.getElementById(product.comments[id].reply_to) : document.getElementById('main-comments-div');
	let commentWrapper = document.createElement('div');
	commentWrapper.className = "comment";
	let authorImg = document.createElement('img');
	authorImg.className = "img-responsive";
	authorImg.setAttribute('src', "http://placehold.it/80x80/");
	let authorName = document.createElement('div');
	authorName.className = "author-name";
	authorName.innerHTML = product.comments[id].authors_name;
	let commentDate = document.createElement('div');
	commentDate.className = "comment-date";
	commentDate.innerHTML = product.comments[id].date;
	let commentContent = document.createElement('div');
	commentContent.className = "comment-content";
	let commentP = document.createElement('p');
	commentP.textContent = product.comments[id].comment;
	let commentButton = document.createElement('button');
	commentButton.innerHTML = "Ответить";
	commentButton.setAttribute('id', 'c-' + id);
	commentButton.setAttribute('onclick', 'replyToComment(this)');

	commentDiv.appendChild(commentWrapper);
	commentWrapper.appendChild(authorImg);
	commentWrapper.appendChild(authorName);
	commentWrapper.appendChild(commentDate);
	commentContent.appendChild(commentP);
	commentWrapper.appendChild(commentContent);
	commentWrapper.appendChild(commentButton);

	if (product.comments[id].reply_to != null) {
		var replyComment = document.createElement('div');
		replyComment.className = "inner-comments";
		commentMainDiv = document.getElementById(product.comments[id].reply_to);
		replyComment.appendChild(commentDiv);
		commentMainDiv.appendChild(replyComment);
	}
	else {
		commentMainDiv.appendChild(commentDiv);
	}
}

function removeCommentsList() {
	var commentsListDiv = document.getElementById('main-comments-div');
	while (commentsListDiv.firstChild) {
		commentsListDiv.removeChild(commentsListDiv.firstChild);
	}
}

function commentsListCreate(product) {
	removeCommentsList();
	for (var i = 0; i < product.comments.length; i++) {
		commentCreate(i, product);
	}
}

function addComment(form) {
	let name = form.elements.name.value;
	let tel = form.elements.tel.value;
	let text = form.elements.text.value;
	var replyCom = form.elements.replyTo.value == ""? null : form.elements.replyTo.value;
	let date = new Date().getDay() + '.' + new Date().getMonth() + '.' + new Date().getFullYear();

	var newComment = {
		'authors_name': name,
      	'comment': text,
      	'date': date,
      	'phone': tel,
      	'reply_to': replyCom
	}
	
	catalog.find(product => parseInt(product.id) == parseInt(params["id"])).comments.push(newComment);
	form.elements.replyTo.value = null;
	commentsListCreate(catalog.find(product => parseInt(product.id) == parseInt(params["id"])));
	localStorage.setItem('catalog', JSON.stringify(catalog));
}

var activeReply = null;

function replyToComment(replyButton) {
	var replyId = replyButton.id.split('-');
	let form = document.forms.comment_form;

	if (activeReply == null) {
		activeReply = replyId[1];
		replyButton.innerHTML = "Отменить";
		form.elements.replyTo.value = replyId[1];
	}
	else if (activeReply == replyId[1]) {
		replyButton.innerHTML = "Ответить";
		form.elements.replyTo.value = null;
		activeReply = null;
	}
	else {
		var obj = document.getElementById('c-'+activeReply);
		obj.innerHTML = "Ответить";
		replyButton.innerHTML = "Отменить";
		activeReply = replyId[1];
		form.elements.replyTo.value = replyId[1];
	}
}

commentsListCreate(catalog.find(product => parseInt(product.id) == parseInt(params["id"])));