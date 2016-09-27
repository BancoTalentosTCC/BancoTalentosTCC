import {
  Template
} from 'meteor/templating';

Template.studentSignup.rendered = function() {
  this.autorun(_.bind(function() {
    Deps.afterFlush(function() {
      // only initialize when DOM is ready
      setMasks();
      setCalendar(); 
      setWizard();
      fixFloatingLabels();
      pwdValidate();
      autocompleteCEP();
    });
  }, this));
}

Template.companySignup.rendered = function() {
  this.autorun(_.bind(function() {
    Deps.afterFlush(function() {
      // only initialize when DOM is ready
      setMasks();
      fixFloatingLabels();
      pwdValidate();
      autocompleteCEP();
    });
  }, this));
}

function setMasks() {
  $('.phone-number').inputmask("(99) 99999999[9]", {
    "placeholder": " "
  });
  $('.cpf').inputmask({
    mask: "999.999.999-99",
    autoUnmask: true
  });
  $('.cnpj').inputmask({
    mask: "99.999.999/9999-99",
    autoUnmask: true
  });
  $('.cep').inputmask({
    mask: "99999-999"
  });
}

function setCalendar() {
  $('#nascimento').datepicker({
    format: 'dd-mm-yyyy',
    language: 'pt-BR',
    endDate: new Date
  });

  $('#nascimento').focus(function() {
    $('#nascimento').blur();
  })
}

function pwdValidate() {
  $('#password').keyup(function(e) {
    var strongRegex = new RegExp("^(?=.{9,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");

    // less than 8, damn
    if (false == enoughRegex.test($(this).val())) {
      $('#passstrength .progress div').removeClass('progress-bar-success progress-bar-warning progress-bar-danger');
      $('#passstrength .progress div').addClass('progress-bar progress-bar-danger');
      $('#passstrength .progress div p').html('No mínimo 8');
    }
    // great password, dude!
    else if (strongRegex.test($(this).val())) {
      $('#passstrength .progress div').removeClass('progress-bar-error progress-bar-warning progress-bar-danger');
      $('#passstrength .progress div').addClass('progress-bar progress-bar-success');
      $('#passstrength .progress div p').html('Ótima senha');
    }
    // could be better, but still ok
    else if (mediumRegex.test($(this).val())) {
      $('#passstrength .progress div').removeClass('progress-bar-success progress-bar-error progress-bar-danger');
      $('#passstrength .progress div').addClass('progress-bar progress-bar-warning');
      $('#passstrength .progress div p').html('Senha mediana');
    }
    // awn, rly? this?
    else {
      $('#passstrength .progress div').removeClass('progress-bar-success progress-bar-warning progress-bar-error');
      $('#passstrength .progress div').addClass('progress-bar progress-bar-danger');
      $('#passstrength .progress div p').html('Senha fraca');
    }
    return true;
  });
}

function autocompleteCEP() {
  $(document).ready(function() {

    function limpa_formulário_cep() {
      // Limpa valores do formulário de cep.
      $("#endereco").val("");
      $("#bairro").val("");
      $("#cidade").val("");
    }

    $("#cep").blur(function() {
    //Quando o campo cep perde o foco.
      //Nova variável "cep" somente com dígitos.
      var cep = $(this).val().replace(/\D/g, '');
      //Verifica se campo cep possui valor informado.
      if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {
          //Preenche os campos com "..." enquanto consulta webservice.
          $("#endereco").addClass('static').addClass('dirty').val("...");
          $("#bairro").addClass('static').addClass('dirty').val("...");
          $("#cidade").addClass('static').addClass('dirty').val("...");

          //Consulta o webservice viacep.com.br/
          $.getJSON("//viacep.com.br/ws/" + cep + "/json/?callback=?", function(dados) {

            if (!("erro" in dados)) {
              console.log(dados);
              //Atualiza os campos com os valores da consulta.
              if (!dados.logradouro == "")
                $("#endereco").val(dados.logradouro);
              if (!dados.bairro == "")
                $("#bairro").val(dados.bairro);
              if (!dados.localidade == "")
                $("#cidade").val(dados.localidade);
              if (!dados.uf == "")     
                $("#uf").val(dados.uf.toLowerCase());
            } //end if.
            else {
              //CEP pesquisado não foi encontrado.
              limpa_formulário_cep();
              Meteor.call('generateErrors', "CEP não encontrado");
            }
          });
        } //end if.
        else {
          //cep é inválido.
          limpa_formulário_cep();
          Meteor.call('generateErrors', "Formato de CEP inválido");
        }
      } //end if.
      else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
      }
    });
  });
}

function fixFloatingLabels() {
  var o = this;
  $('.floating-label .form-control').on('keyup change', function(e) {
    var input = $(e.currentTarget);
    if ($.trim(input.val()) !== '') {
      input.addClass('dirty').removeClass('static');
    } else {
      input.removeClass('dirty').removeClass('static');
    }
  });
  $('.floating-label .form-control').each(function() {
    var input = $(this);
    if ($.trim(input.val()) !== '') {
      input.addClass('static').addClass('dirty');
    }
  });
  $('.floating-label .form-control').each(function() {
    $(this).after('<div class="form-control-line"></div>');
  });
}

function setWizard() {
  handleTabShow = function(tab, navigation, index, wizard) {
    var total = navigation.find('li').length;
    var current = index + 0;
    var percent = (current / (total - 1)) * 100;
    var percentWidth = 100 - (100 / total) + '%';

    navigation.find('li').removeClass('done');
    navigation.find('li.active').prevAll().addClass('done');

    wizard.find('.progress-bar').css({
      width: percent + '%'
    });
    $('.form-wizard-horizontal').find('.progress').css({
      'width': percentWidth
    });
  };

  var jqueryValidate = function(tab, navigation, index) {
    var form = $('#wizard').find('.form-validation');
    var valid = form.valid();
    if (!valid) {
      form.data('validator').focusInvalid();
      return false;
    }
  }

  $('#wizard').bootstrapWizard({
    'nextSelector': '#next',
    'previousSelector': '#previous',
    'firstSelector': '#first',
    'lastSelector': '#last',
    'onTabShow': function(tab, navigation, index) {
      handleTabShow(tab, navigation, index, $('#wizard'));
    },
    onNext: jqueryValidate,
    onLast: jqueryValidate,
    onTabClick: jqueryValidate
  });
}
