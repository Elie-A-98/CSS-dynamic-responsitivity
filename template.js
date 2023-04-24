const renderTemplate = (template, parent, props = {}) => {
	let renderedTemplate = document.createElement('div')
	let parsedHTMLString = template.innerHTML.trim()
	Object.entries(props).forEach(([key, value]) => {
		console.log(key + ' ' + value)
		parsedHTMLString = parsedHTMLString.replace(`{${key}}`, value);
	})
	renderedTemplate.innerHTML = parsedHTMLString
	renderedTemplate = renderedTemplate.firstChild
	parent.appendChild(renderedTemplate)

	return renderedTemplate;
}