package slimeLand;

import java.util.Scanner;

public class Warrior {

    public String name;
    public int hp;
    public int mp;
    int getput;
    Scanner scan = new Scanner(System.in);
    
    public void att(int att) {
        
        System.out.println(this.name+"은 "+att+" 공격을 했습니다!!");
        
        //자바 랜덤함수 사용
    }
    public void dmg(int dmg) {
        this.hp = this.hp - dmg;
        System.out.println(this.name+"은 "+dmg+" 공격을 받았습니다!!");
    }

    public Warrior(String input_name, int input_hp, int input_mp) {
        this.name = input_name;
        this.hp = input_hp;
        this.mp = input_mp;
    }

    public static int fireball() {
        return 20;
    }

    public static int iceball() {
        return 15;
    }

    public static int reapcuter() {
        return 15;
    }

    public void info() {
        System.out.println("_________"+name+"_________");
        System.out.println("HP = "+this.hp);
        System.out.println("MP = "+this.mp);
    }

    public int Choose(int output) {
        
        boolean checkWhile = true;
        while(checkWhile) {
            if(output == 1) {
                System.out.println(this.name+"은 기본공격을 사용했습니다");
                return 50;
            } else if(output ==2) {
                checkWhile = false;
            } else {
                System.out.println("다시 선택해주세요");
            }
        }
        
        
        
        System.out.println("어떤 스킬을 사용하시겠습니까?");
        System.out.println("1. 파이어볼 2. 아이스볼 3. 리프커터");
        getput = scan.nextInt();
        if( getput == 1) {
            System.out.println(this.name+"은 파이어볼을 사용했습니다");

        } else if( getput==2) {
            System.out.println(this.name+"은 아이스볼을 사용했습니다");
            
        } else if( getput==3) {
            System.out.println(this.name+"은 리프커터를 사용했습니다");
            
        }else {
            System.out.println("다시 입력해주세요");
        }
           
            return output;
    }
        
    
}
