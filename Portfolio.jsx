import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  const categories = [
    { title: "飲食店", description: "モダンなレストランサイト" },
    { title: "物販店", description: "商品カタログと決済導線" },
    { title: "カフェ", description: "落ち着いた雰囲気と動きのあるUI" },
    { title: "ヘアサロン", description: "予約システム付きのサロンサイト" },
  ];

  return (
    <main className="p-6 md:p-12 bg-gray-50 min-h-screen">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">My Portfolio</h1>
        <p className="text-gray-600">ジャンルごとのWebサイト事例を紹介</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <Card className="rounded-2xl shadow-lg hover:scale-[1.02] transition-all cursor-pointer">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-500">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button className="text-lg px-8 py-4 rounded-2xl shadow">GitHubで見る</Button>
      </div>
    </main>
  );
}
