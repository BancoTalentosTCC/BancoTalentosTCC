import { Template } from 'meteor/templating';
import '../../../client/pages/signup/students.html';
import '../../../client/pages/signup/companies.html';

Template.ApplicationLayout.rendered = function() {
	T9n.setLanguage("pt");
  $('.phone-number').inputmask("(99) 99999999[9]", { "placeholder": " " });
  $('.cpf').inputmask({mask: "999.999.999-99", autoUnmask: true});
  $('.cnpj').inputmask({mask: "99.999.999/9999-99", autoUnmask: true});
  $('.cep').inputmask({mask: "99999-999"});
  $('#nascimento').datepicker({
    format: 'yyyy-mm-dd',
    language: 'pt-BR'
  });
 }

/**
 * Brazilian translation for bootstrap-datepicker
 * Cauan Cabral <cauan@radig.com.br>
 */
;(function($){
	$.fn.datepicker.dates['pt-BR'] = {
		days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
		daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
		daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
		months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
		monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
		today: "Hoje",
		monthsTitle: "Meses",
		clear: "Limpar",
		format: "dd/mm/yyyy"
	};
}(jQuery));