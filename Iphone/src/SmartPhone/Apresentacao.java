package SmartPhone;

import Iphone.Iphone;

public class Apresentacao {
	
	public static void main(String[] args) {
		Iphone iphoneOne = new Iphone();
		iphoneOne.adicionarNovaAba();
		iphoneOne.atender();
		iphoneOne.atualizarPagina();
		iphoneOne.tocar();
		iphoneOne.pausar();
		iphoneOne.selecionarMusica();
		iphoneOne.ligar(12312412);
		iphoneOne.iniciarCorrerioVoz();
		iphoneOne.exibirPagina();
	}

}
