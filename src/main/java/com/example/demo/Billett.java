package com.example.demo;

public class Billett {

    private String film;
    private String fornavn;
    private String etternavn;
    private String telefonnr;
    private String mail;
    private String antall;


    public Billett(String film, String fornavn, String etternavn, String telefonnr, String mail, String antall) {
        this.film = film;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefonnr = telefonnr;
        this.mail = mail;
        this.antall = antall;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public void setTelefonnr(String telefonnr) {
        this.telefonnr = telefonnr;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public void setAntall(String antall) {
        this.antall = antall;
    }

    public String getFilm() {
        return film;
    }

    public String getFornavn() {
        return fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public String getTelefonnr() {
        return telefonnr;
    }

    public String getMail() {
        return mail;
    }

    public String getAntall() {
        return antall;
    }
}
