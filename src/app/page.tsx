import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


const Products = () => {
  return (
    <div className="p-5 border border-red-500 rounded-xl">
      <h1 className="text-red-500"> Products Page</h1>
      <Input placeholder="Search Products" />
      <Button>Click Me</Button>
    </div>
  );
};

export default Products;
