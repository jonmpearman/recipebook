<?php

class Instructions extends Database {

    function __construct(){
		parent::__construct();
    }
    
    function get_all_instructions(){
	
		$sql = 'SELECT * FROM instructions';
		return $this->get_all_items($sql);
    }
    
    function get_instructions($id){
	
		$sql = 'SELECT * FROM instructions WHERE id = :id';
		$where = array('id' => $id);
		return $this->get_items($sql, $where);
    } 
    
    function get_recipe_instructions($id){
	
		$sql = 'SELECT * FROM instructions WHERE recipe_id = :recipe_id';
		$where = array('recipe_id' => $id);
		return $this->get_items($sql, $where);
    }    
    
    function add_instruction($recipe_id, $value){

		$sql = 'INSERT INTO instructions (recipe_id, name) VALUES(:recipe_id, :name)';
		$params = array(
	    	':recipe_id' => $recipe_id,
	    	':name' => $value
		);
		return $this->insert_items($sql, $params);
    }  
    
    function update_instruction($id, $value){

		$sql = 'UPDATE instructions SET name = :name WHERE id = :id';
		$params = array(':id' => $id, ':name' => $value);
		return $this->update_items($sql, $params);
    }    
    
    function delete_instruction($id){

		$sql = 'DELETE FROM instructions WHERE id = :id';
		$params = array(':id' => $id);
		return $this->delete_items($sql, $params);
    }
    
    function delete_instruction_by_value($id){

		$sql = 'DELETE FROM instructions WHERE recipe_id = :id';
		$params = array(':id' => $id);
		return $this->delete_items($sql, $params);
    }    
    
}