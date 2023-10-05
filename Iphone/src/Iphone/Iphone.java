package Iphone;

import Modulos.Internet;
import Modulos.Musicial;
import Modulos.Telefonico;

public class Iphone implements Internet, Musicial, Telefonico {

	@Override
	public void ligar(int numero) {
		System.out.println("Ligando para " + numero);
	}

	@Override
	public void atender() {
		System.out.println("Chamada Atendida");

	}

	@Override
	public void iniciarCorrerioVoz() {
		System.out.println("Gravando coreio de voz");

	}

	@Override
	public void exibirPagina() {
		System.out.println("Carragando Pagina");

	}

	@Override
	public void adicionarNovaAba() {
		System.out.println("Abreto nova aba");

	}

	@Override
	public void atualizarPagina() {
		System.out.println("Pagina Recarregada");

	}

	@Override
	public void tocar() {
		System.out.println("Play music");

	}

	@Override
	public void pausar() {
		System.out.println("musica pausada");

	}

	@Override
	public void selecionarMusica() {
		System.out.println("Musica selecionada");

	}

}
