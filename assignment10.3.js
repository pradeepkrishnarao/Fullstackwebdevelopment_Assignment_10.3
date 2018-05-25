/* class Dog has single property "name" and method "speak" calling "speak" method return "Woof" */
    class Dog{

        constructor(name){
            this.name=name;        
        }

        speak(){  
            return "Woof";
        }
    
    }
/* class Labrador derives from Dog class. Labrador has two properties color and breedWeight */
    class Labrador extends Dog{

        constructor(name,color,breedWeight){

            super(name); //super() refers to parent property
            this.color=color;
            this.breedWeight=breedWeight;

    }
/* Labrador class override  parent method speak and return "Labrador says WOOF" */
        speak(){        
        
            return "Labrador says WOOF";

        }
    }

