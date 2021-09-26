function encabezado() {
    /* creacion img */
    var div = document.createElement("div");
    div.className = "py-5 text-center";
    var img = document.createElement("img");
    img.className = "d-block mx-auto mb-4";
    img.src = "bootstrap-solid.svg";
    img.width = 72;
    img.height = 72;
    div.appendChild(img);


    // creacion h2
    var h2 = document.createElement("h2");
    var texto_h2 = document.createTextNode("Checkout form");
    h2.appendChild(texto_h2);
    div.appendChild(h2);

    // creacion subtitulo

    var p = document.createElement('p');
    p.className = 'lead';
    var texto_p = document.createTextNode("Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.");
    p.appendChild(texto_p);
    div.appendChild(p);

    return div;

}


function footer_links(texto) {
    var li = document.createElement('li');
    li.className = "list-inline-item";

    var a = document.createElement('a');
    a.href = '#';

    a.appendChild(document.createTextNode(texto));
    li.appendChild(a);

    return li;
}

function whitespace() {
    var foo = document.createElement("span")
    foo.appendChild(document.createTextNode("\u00A0"));

    return foo;
}

function footer() {
    var footer = document.createElement('footer');
    footer.className = 'my-5 pt-5 text-muted text-center text-small';

    var p = document.createElement('p');
    p.className = 'mb-1';
    p.appendChild(document.createTextNode('© 2017-2019 Company Name'));
    footer.appendChild(p);

    var ul = document.createElement('ul');
    ul.className = "list-inline";

    ul.appendChild(footer_links('Privacy'));
    ul.appendChild(whitespace());
    ul.appendChild(footer_links('Terms'));
    ul.appendChild(whitespace());
    ul.appendChild(footer_links('Support'));

    footer.appendChild(ul);

    return footer;

}

function span_builder(texto, klass) {
    var span = document.createElement('span');
    span.className = klass;
    span.appendChild(document.createTextNode(texto));

    return span;
}

function item_cart(nombre, descripcion, precio, promo = false) {
    var li = document.createElement('li');
    var div = document.createElement('div');
    var small = document.createElement("small");
    small.appendChild(document.createTextNode(descripcion));
    var span = document.createElement('span');
    

    if (promo) {
        li.className = 'list-group-item d-flex justify-content-between bg-light';
        div.className = 'text-success';
        small.className = 'text-success';
        span.className = "text-success";
    } else {
        li.className = 'list-group-item d-flex justify-content-between lh-condensed';
        small.className = 'text-muted';
        span.className = "text-muted";
    }
    var h6 = document.createElement('h6');
    h6.className = 'my-0';
    h6.appendChild(document.createTextNode(nombre));

    div.appendChild(h6);
    div.appendChild(small);

    span.appendChild(document.createTextNode(precio));
    li.appendChild(div);
    li.appendChild(span);

    return li;

}

function codigo_promocion() {
    var form = document.createElement("form");
    form.className = "card p-2"
    var div_group = document.createElement("div");
    div_group.className = "input-group";
    form.appendChild(div_group);

    var input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control';
    input.placeholder = 'Promo code';
    div_group.appendChild(input);

    var div_button = document.createElement('div')
    div_button.className = 'input-group-append';
    var button = document.createElement('button');
    button.type = 'submit';
    button.className = 'btn btn-secondary';
    button.appendChild(document.createTextNode('Redeem'));
    div_button.appendChild(button);
    div_group.appendChild(div_button);


    return form;
}

function cart() {
    var container = document.createElement('div');
    container.className = 'col-md-4 order-md-2 mb-4';

    var h4 = document.createElement('h4');
    h4.className = 'd-flex justify-content-between align-items-center mb-3';

    h4.appendChild(span_builder('Your cart', 'text-muted'));
    h4.appendChild(span_builder('3', 'badge badge-secondary badge-pill'));
    container.appendChild(h4);

    var ul = document.createElement('ul');
    ul.className = 'list-group mb-3';
    ul.appendChild(item_cart("Product name", "Brief description", "$12"));
    ul.appendChild(item_cart("Second product", "Brief description", "$8"));
    ul.appendChild(item_cart("Third item", "Brief description", "$5"));
    ul.appendChild(item_cart("Promo code", "EXAMPLECODE", "-$5", true));

    var li_total = document.createElement('li');
    li_total.className = 'list-group-item d-flex justify-content-between';
    var span_total = document.createElement('span');
    span_total.appendChild(document.createTextNode("Total (USD)"));
    var price_total = document.createElement('strong')
    price_total.appendChild(document.createTextNode("$20"));
    li_total.appendChild(span_total);
    li_total.appendChild(price_total);
    ul.appendChild(li_total);

    container.appendChild(ul);
    container.appendChild(codigo_promocion());

    return container;

}


function validation(verify, value = true) {

    var input_validation = document.createElement('div');
    input_validation.appendChild(document.createTextNode(verify));
    input_validation.className = 'invalid-feedback';
    if (!value){
        input_validation.style = 'width : 100%';
    }

    return input_validation;
}

function name_info(attr, texto, name){

    var col = document.createElement('div');
    col.className = 'col-md-6 mb-3';
    
    var label = document.createElement('label');
    label.appendChild(document.createTextNode(texto));
    label.setAttribute('for', attr);


    var input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control';
    input.id = attr;

    col.appendChild(label);
    col.appendChild(input);
    col.appendChild(validation(name));
    

    return col;
}

function personal_info(attr, texto, placeholder, type, require = false){

    var div_form = document.createElement('div');
    div_form.className = 'mb-3';
        
    var label = document.createElement('label');
    label.setAttribute('for', attr);
    label.appendChild(document.createTextNode(texto));
    div_form.appendChild(label);

    var input = document.createElement('input');
    input.id = attr;
    input.className = 'form-control';
    input.type = type;
    input.placeholder = placeholder;
    input.required = require;
    

    if (attr == 'username'){

        var div_group = document.createElement('div');
        div_group.className = 'input-group';
        

        var div_prepend = document.createElement('div');
        div_prepend.className = 'input-group-prepend';
        div_group.appendChild(div_prepend);
    
        var span = document.createElement('span');
        span.className = 'input-group-text';
        span.appendChild(document.createTextNode('@'));
        div_prepend.appendChild(span);

        div_group.appendChild(input);
        div_group.appendChild(validation('Your username is required', false));
        div_form.appendChild(div_group);
    }

    if (attr == 'email'){

        var span = document.createElement('span');
        span.className = 'text-muted';
        span.appendChild(document.createTextNode(' (Optional)'));
        label.appendChild(span);

        div_form.appendChild(input);
        div_form.appendChild(validation('Please enter a valid email address for shipping updates.'));

    }

    if (attr == 'address'){

        div_form.appendChild(input);
        div_form.appendChild(validation('Please enter your shipping address.'));
        
    }

    if (attr == 'address2'){

        var span = document.createElement('span');
        span.className = 'text-muted';
        span.appendChild(document.createTextNode(' (Optional)'));

        label.appendChild(span)
        div_form.appendChild(input);

    }
    
    return div_form;
}

function location_info(class_text, attr, label_text, option_text1, option_text2, require = false){

    var div = document.createElement('div');
    div.className = class_text;

    var label = document.createElement('label');
    label.setAttribute('for', attr);
    label.appendChild(document.createTextNode(label_text));
    div.appendChild(label);
   
    var select = document.createElement('select');
    select.id = attr;
    select.className = "custom-select d-block w-100";
    select.required = require;

    if (attr == 'country'){

        var option = document.createElement('option');
        option.value = "";
        option.appendChild(document.createTextNode(option_text1));

        var option1 = document.createElement('option');
        option1.appendChild(document.createTextNode(option_text2));


        select.appendChild(option);
        select.appendChild(option1);
        div.appendChild(select);
        div.appendChild(validation('Please provide a valid country.'));
    }

    if (attr == 'state') {

        var option = document.createElement('option');
        option.value = "";
        option.appendChild(document.createTextNode(option_text1));

        var option1 = document.createElement('option');
        option1.appendChild(document.createTextNode(option_text2));


        select.appendChild(option);
        select.appendChild(option1);
        div.appendChild(select);
        div.appendChild(validation('Please provide a valid state.'));
    }

    if (attr == 'zip') {

        var input = document.createElement('input');
        input.id = attr;
        input.className = 'form-control';
        input.type = 'text'
        input.placeholder = '';
        input.required = require;

        div.appendChild(input);
        div.appendChild(validation('Zip code required.'));
    }
    
    return div;
}

function checkbox(id_text, label_text){

    var div = document.createElement('div')
    div.className = 'custom-control custom-checkbox';

    var input = document.createElement('input');
    input.id = id_text;
    input.className = 'custom-control-input';
    input.type = 'checkbox';

    var label = document.createElement('label');
    label.className = 'custom-control-label';
    label.setAttribute('for', id_text);
    label.appendChild(document.createTextNode(label_text));

    div.appendChild(input);
    div.appendChild(label);

    return div;

}

function payment(id_text, label_text){

    var div = document.createElement('div');
    div.className = 'custom-control custom-radio';

    var input = document.createElement('input');
    input.id = id_text;
    input.className = 'custom-control-input';
    input.name = 'paymentMethod';
    input.type = 'radio';
    input.required = true;
    
    var label = document.createElement('label');
    label.className = 'custom-control-label'
    label.setAttribute('for', id_text);
    label.appendChild(document.createTextNode(label_text));
    
    if (id_text == 'credit'){
        input.checked = true;
    }

    div.appendChild(input);
    div.appendChild(label);

    return div;

}

function card_info(label_text, check = false){

    var div = document.createElement('div');
    div.className = 'col-md-6 mb-3';

    var label = document.createElement('label');
    label.setAttribute('for', 'cc-number')
    label.appendChild(document.createTextNode(label_text));

    var input = document.createElement('input');
    input.id = 'cc-number';
    input.className = 'form-control';
    input.type = 'text'
    input.placeholder = "";
    input.required = true;

    div.appendChild(label)
    div.appendChild(input);
    if (check == true){

        var small = document.createElement('small');
        small.className = 'text-muted';
        small.appendChild(document.createTextNode('Full name as displayed on card'));
        
        div.appendChild(small);
        div.appendChild(validation('Name on card is required'));

    }else{
    
        div.appendChild(validation('Credit card number is required'));
    }

    return div;
}

function card_expiration(id_text, label_text, check = false) {

    var div = document.createElement('div');
    div.className = 'col-md-3 mb-3';

    var label = document.createElement('label');
    label.setAttribute('for', id_text)
    label.appendChild(document.createTextNode(label_text));

    var input = document.createElement('input');
    input.id = id_text;
    input.className = 'form-control';
    input.type = 'text'
    input.placeholder = "";
    input.required = true;

    div.appendChild(label);
    div.appendChild(input);

    if (check == true) {
        div.appendChild(validation('Expiration date required'));
    }else{
        div.appendChild(validation('Security code required'));
    }
    
    return div;
}


function call_hr(){

    var hr = document.createElement('hr')
    hr.className = 'mb-4';

    return hr;
}

function call_h4(text){
    var h4 = document.createElement('h4');
    h4.className = 'mb-3';
    h4.appendChild(document.createTextNode(text));

    return h4;
}


function formulario() {
    var container = document.createElement('div');
    container.className = 'col-md-8 order-md-1';

    var form = document.createElement('form');
    form.className = 'needs-validation';

    var row_name = document.createElement('div');
    row_name.className = 'row';

    var row_location = document.createElement('div');
    row_location.className = 'row';

    var div_payment = document.createElement('div');
    div_payment.className = 'd-block my-3';

    var row_card_info = document.createElement('div');
    row_card_info.className = 'row';

    var row_card_expiration = document.createElement('div');
    row_card_expiration.className = 'row';

    var checkout = document.createElement('button');
    checkout.className = 'btn btn-primary btn-lg btn-block';
    checkout.type = 'submit';
    checkout.appendChild(document.createTextNode('Continue to checkout'));


    container.appendChild(call_h4('Billing address'));
    container.appendChild(form);
    form.appendChild(row_name);
    row_name.appendChild(name_info('firstName', 'First name', 'Valid first name is required'));
    row_name.appendChild(name_info('lastName', 'Last name', 'Valid last name is required'));
    form.appendChild(personal_info('username','Username','Username', 'text', true));
    form.appendChild(personal_info('email', 'Email', 'you@example.com', 'email'));
    form.appendChild(personal_info('address', 'Address', '1234 Main St', 'text', true));
    form.appendChild(personal_info('address2', 'Address 2', 'Apartment or suite', 'text'));
    form.appendChild(row_location);
    row_location.appendChild(location_info('col-md-5 mb-3', 'country', 'Country', 'Choose...', 'United States', true));
    row_location.appendChild(location_info('col-md-4 mb-3', 'state', 'State', 'Choose...', 'California', true));
    row_location.appendChild(location_info('col-md-3 mb-3', 'zip', 'Zip', '', '',true));
    form.appendChild(call_hr());
    form.appendChild(checkbox('same-address', 'Shipping address is the same as my billing address',));
    form.appendChild(checkbox('save-info', 'Save this information for next time',));
    form.appendChild(call_hr());
    form.appendChild(div_payment)
    div_payment.appendChild(call_h4('Payment'));
    div_payment.appendChild(payment('credit', 'Credit card'));
    div_payment.appendChild(payment('debit', 'Debit card'));
    div_payment.appendChild(payment('paypal', 'PayPal'));
    form.appendChild(row_card_info);
    row_card_info.appendChild(card_info('Name on card', true));
    row_card_info.appendChild(card_info('Credit card number'));
    form.appendChild(row_card_expiration);
    row_card_expiration.appendChild(card_expiration('cc-expiration', 'Expiration', true));
    row_card_expiration.appendChild(card_expiration('cc-cvv', 'CVV'));
    form.appendChild(call_hr());
    form.appendChild(checkout);

    
    return container;
}

var body = document.getElementsByTagName('body')[0];
body.className = 'bg-light';
var container = document.createElement('div');
container.className = 'container';
var row = document.createElement('div')
row.className = 'row';
body.appendChild(container);
container.appendChild(encabezado());
container.appendChild(row);
row.appendChild(cart());
row.appendChild(formulario());
container.appendChild(footer());
