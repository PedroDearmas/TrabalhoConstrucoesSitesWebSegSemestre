function gravar() {
  var email = document.getElementById("email").value;
  var senha1 = document.getElementById("senha1").value;
  var senha2 = document.getElementById("senha2").value;
  if (senhaforte(senha1, senha2)) {
    var obj = { nome: document.getElementById("nome").value, senha: senha1 };
    sessionStorage.setItem(email, JSON.stringify(obj));
    alert("Cadastro Concluido com Sucesso");
  }
}
function senhaforte(senha1, senha2) {
  var letrasMaiusculas = /[A-Z]/;
  var letrasMinusculas = /[a-z]/;
  var numeros = /[0-9]/;
  var caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
  var auxMaiuscula = 0;
  var auxMinuscula = 0;
  var auxNumero = 0;
  var auxEspecial = 0;

  if (senha1 != senha2) {
    alert("Senhas diferentes!");
    return false;
  } else if (senha1.length < 8) {
    alert("A senha deve conter no mínimo 8 caracteres");
    return false;
  } else {
    for (var i = 0; i < senha1.length; i++) {
      if (letrasMaiusculas.test(senha1[i])) auxMaiuscula++;
      else if (letrasMinusculas.test(senha1[i])) auxMinuscula++;
      else if (numeros.test(senha1[i])) auxNumero++;
      else if (caracteresEspeciais.test(senha1[i])) auxEspecial++;
    }

    if (auxMaiuscula == 0) {
      alert("Precisa de letra maiuscula");
      return false;
    } else if (auxMinuscula == 0) {
      alert("Precisa de letra minuscula");
      return false;
    } else if (auxNumero == 0) {
      alert("Precisa de número");
      return false;
    } else if (auxEspecial == 0) {
      alert("Precisa de caracteres especiais!");
      return false;
    }
  }
  return true;
}
function logar() {
  var email = document.getElementById("loginv").value;
  var password = document.getElementById("senha").value;
  var confirmar = sessionStorage.getItem(email);
  confirmar = JSON.parse(confirmar);
  if ((confirmar.senha == password) != 0) {
    sessionStorage.setItem("usuario", confirmar.nome);
    alert("Bem vindo ao site");
    submit();
  } else {
    alert("Usuario ou Senha incorreta");
  }
}
function carreusu() {
  document.getElementById("usuario").innerHTML +=
    sessionStorage.getItem("usuario");
}
function multiplicarPlaceholder(
  soma,
  v1,
  p1,
  v2,
  p2,
  v3,
  p3,
  v4,
  p4,
  v5,
  p5,
  v6,
  p6
) {
  var resultado = 0;
  resultado = parseFloat(resultado);
  resultado += v1 * p1;
  resultado += v2 * p2;
  resultado += v3 * p3;
  resultado += v4 * p4;
  resultado += v5 * p5;
  resultado += v6 * p6;
  soma.value = resultado;
  sessionStorage.setItem("valort", resultado);
}
function preco() {
  var valort = sessionStorage.getItem("valort");
  document.getElementById("valortotal").value = valort;
}
function multiplicarPlaceholder(soma, v1, p1, v2, p2, v3, p3) {
  var resultado = 0;
  resultado = parseFloat(resultado);
  resultado += v1 * p1;
  resultado += v2 * p2;
  resultado += v3 * p3;
  soma.value = resultado;
  sessionStorage.setItem("valort", resultado);
}
function preco() {
  var valort = sessionStorage.getItem("valort");
  document.getElementById("valortotal").value = valort;
}
function calcular(valort, parcelas, res) {
  var valort = parseInt(valort.value);
  var juros = 0;

  if (parcelas.value <= 4) {
    res.value = (valort / parcelas.value).toFixed(2);
  } else if (parcelas.value >= 5 && parcelas.value <= 8) {
    res.value = ((valort + valort * 0.05) / parcelas.value).toFixed(2);
  } else {
    for (var i = 0; i < parcelas.value; i++) {
      valort += valort * 0.015;
    }
    res.value = (valort / parcelas.value).toFixed(2);
  }
}
