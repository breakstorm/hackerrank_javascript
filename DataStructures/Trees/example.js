/*
트리 데이터구조 : 
 - 노드, 링크 2개
트리 표현방법 :
 - 레프트 차일드, 라이트 시블링
 - 바이너리 트리
순회방법 : 
 - pre-order
 - in-order
 - post-order 
참고사이트1 : http://blog.eairship.kr/215
참고사이트2 : https://www.zerocho.com/category/Algorithm/post/580ed6eb77023c0015ee9686
*/

var Tree = (function(){
    function Tree(){
        this.count = 0;
        this.root;
    }
    function Node(data){
        this.data = data;
        this.left;
        this.right;
    }
    
    function _insert(root, node){
        if(!root) return node;
        if(node.data < root.data) {
            root.left = _insert(root.left, node);
            return root;
        } else{
            root.right = _insert(root.right, node);
            return root;
        }
    }

    Tree.prototype.add = function(data){
        var node = new Node(data);
        if(this.count == 0){
            this.root = node;
        } else{
            _insert(this.root, node);
        }
        return ++this.count;
    }
})

var tree = new Tree();
console.log(tree);
tree.add(5);