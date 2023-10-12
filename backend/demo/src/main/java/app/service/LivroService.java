package app.service;

import app.dto.LivroDTO;
import app.entity.Livro;
import app.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LivroService {

    @Autowired
    private LivroRepository livroRepository;

    public List<LivroDTO> listAll(){
        List<Livro> lista = livroRepository.findAll();
        List<LivroDTO> listaDTO = new ArrayList<>();

        for(int i = 0; i < lista.size(); i++)
            listaDTO.add(this.toLivroDTO(lista.get(i)));

        return listaDTO;
    }

    public LivroDTO save(LivroDTO livroDTO){
        Livro livro = this.toLivro(livroDTO);
        Livro livroSalvo = livroRepository.save(livro);
        return this.toLivroDTO(livroSalvo);
    }

    private LivroDTO toLivroDTO(Livro livro){
        LivroDTO livroDTO = new LivroDTO();
        livroDTO.setId(livro.getId());
        livroDTO.setTitulo(livro.getTitulo());
        livroDTO.setAutor(livro.getAutor());
        livroDTO.setAno(livro.getAno());
        return livroDTO;
    }

    private Livro toLivro(LivroDTO livroDTO){
        Livro livro = new Livro();
        livro.setId(livroDTO.getId());
        livro.setTitulo(livroDTO.getTitulo());
        livro.setAutor(livroDTO.getAutor());
        livro.setAno(livroDTO.getAno());
        return livro;
    }

    public LivroDTO update(Long id, LivroDTO livroDTO){
        Livro livro = livroRepository.findById(id).orElseThrow(() -> new RuntimeException("Livro não encontrado"));

        livro.setTitulo(livroDTO.getTitulo());
        livro.setAutor(livroDTO.getAutor());

        Livro livroAtualizado = livroRepository.save(livro);

        return this.toLivroDTO(livroAtualizado);
    }



    public void delete(Long id){
        Livro livro = livroRepository.findById(id).orElseThrow(() -> new RuntimeException("Livro não encontrado"));
        livroRepository.delete(livro);
    }
}
