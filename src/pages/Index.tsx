import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredProducts = [
    {
      id: 1,
      title: 'CS:GO - Prime Status',
      price: '899 ₽',
      oldPrice: '1299 ₽',
      rating: 4.9,
      reviews: 2847,
      seller: 'ProGamer Store',
      sellerRating: 5.0,
      instant: true,
      image: '🎮',
    },
    {
      id: 2,
      title: 'Valorant Points 1000 VP',
      price: '649 ₽',
      rating: 4.8,
      reviews: 1523,
      seller: 'GameHub',
      sellerRating: 4.9,
      instant: true,
      image: '🎯',
    },
    {
      id: 3,
      title: 'Dota 2 Battle Pass 2024',
      price: '1499 ₽',
      rating: 4.9,
      reviews: 3241,
      seller: 'ESport Market',
      sellerRating: 5.0,
      instant: true,
      image: '⚔️',
    },
    {
      id: 4,
      title: 'League of Legends RP 1380',
      price: '799 ₽',
      rating: 4.7,
      reviews: 987,
      seller: 'GameStore Pro',
      sellerRating: 4.8,
      instant: true,
      image: '🏆',
    },
  ];

  const features = [
    {
      icon: 'Zap',
      title: 'Мгновенная доставка',
      description: 'Получите товар сразу после оплаты',
    },
    {
      icon: 'Shield',
      title: 'Защита сделок',
      description: 'Гарантия возврата средств',
    },
    {
      icon: 'Star',
      title: 'Рейтинг продавцов',
      description: 'Проверенные и надёжные продавцы',
    },
    {
      icon: 'MessageCircle',
      title: 'Чат с продавцом',
      description: 'Задайте вопрос перед покупкой',
    },
    {
      icon: 'Bitcoin',
      title: 'Криптовалюта',
      description: 'Оплата в BTC, ETH, USDT',
    },
    {
      icon: 'Gift',
      title: 'Реферальная система',
      description: 'Зарабатывайте на рекомендациях',
    },
  ];

  const paymentMethods = [
    { name: 'ЮMoney', icon: '💳' },
    { name: 'PayPal', icon: '💰' },
    { name: 'QIWI', icon: '🥝' },
    { name: 'Т-Банк', icon: '🏦' },
    { name: 'Сбербанк', icon: '🏦' },
    { name: 'Альфа-Банк', icon: '🏦' },
    { name: 'ВТБ', icon: '🏦' },
    { name: 'Райффайзен', icon: '🏦' },
    { name: 'Crypto', icon: '₿' },
  ];

  const categories = ['Все', 'Steam', 'Epic Games', 'Battle.net', 'Origin', 'Ubisoft', 'Xbox', 'PlayStation'];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-3xl">🎮</div>
              <h1 className="text-2xl font-bold text-neon-cyan neon-glow">GameMarket</h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-foreground/80 hover:text-neon-cyan transition-colors">Главная</a>
              <a href="#catalog" className="text-foreground/80 hover:text-neon-cyan transition-colors">Каталог</a>
              <a href="#sellers" className="text-foreground/80 hover:text-neon-cyan transition-colors">Продавцам</a>
              <a href="#buyers" className="text-foreground/80 hover:text-neon-cyan transition-colors">Покупателям</a>
              <a href="#support" className="text-foreground/80 hover:text-neon-cyan transition-colors">Поддержка</a>
              <a href="#partner" className="text-foreground/80 hover:text-neon-cyan transition-colors">Партнёрам</a>
              <a href="#faq" className="text-foreground/80 hover:text-neon-cyan transition-colors">FAQ</a>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Icon name="User" className="text-neon-cyan" />
              </Button>
              <Button className="bg-neon-cyan text-dark-bg hover:bg-neon-cyan/90 neon-glow font-semibold">
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-background to-neon-cyan/20" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Игровой маркетплейс #1
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
              Покупай и продавай игровые товары безопасно и мгновенно
            </p>
            
            <div className="relative max-w-2xl mx-auto mb-8">
              <Input
                type="text"
                placeholder="Найти игру, скин, валюту..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-14 pl-14 pr-4 bg-card/50 border-neon-cyan/30 text-lg focus:border-neon-cyan neon-glow"
              />
              <Icon name="Search" className="absolute left-5 top-1/2 -translate-y-1/2 text-neon-cyan" size={24} />
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {paymentMethods.map((method, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="px-4 py-2 text-sm border-neon-cyan/30 bg-card/30 backdrop-blur-sm hover:border-neon-cyan hover:neon-glow transition-all"
                >
                  <span className="mr-2">{method.icon}</span>
                  {method.name}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-black text-neon-cyan mb-2">150K+</div>
                <div className="text-foreground/60">Товаров</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-neon-purple mb-2">50K+</div>
                <div className="text-foreground/60">Продавцов</div>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <div className="text-4xl font-black text-neon-pink mb-2">1M+</div>
                <div className="text-foreground/60">Сделок</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-neon-cyan">Популярные</span> товары
          </h3>

          <Tabs defaultValue="Все" className="w-full">
            <TabsList className="w-full justify-start mb-8 bg-card/50 border border-border/50 overflow-x-auto flex-nowrap">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="data-[state=active]:bg-neon-cyan data-[state=active]:text-dark-bg data-[state=active]:neon-glow whitespace-nowrap"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="Все">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="bg-card/50 border-border/50 hover:border-neon-cyan/50 hover:neon-glow transition-all duration-300 backdrop-blur-sm overflow-hidden group"
                  >
                    <CardHeader className="pb-4">
                      <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform">
                        {product.image}
                      </div>
                      <CardTitle className="text-lg line-clamp-2">{product.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-1">
                          <Icon name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                          <span className="text-sm font-semibold">{product.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="User" size={14} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{product.seller}</span>
                        <div className="flex items-center gap-1 ml-auto">
                          <Icon name="Star" size={12} className="text-neon-cyan fill-neon-cyan" />
                          <span className="text-xs text-neon-cyan font-semibold">{product.sellerRating}</span>
                        </div>
                      </div>

                      {product.instant && (
                        <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple/50 mb-3">
                          <Icon name="Zap" size={12} className="mr-1" />
                          Моментально
                        </Badge>
                      )}

                      <div className="flex items-end gap-2">
                        <div className="text-2xl font-black text-neon-cyan">{product.price}</div>
                        {product.oldPrice && (
                          <div className="text-sm text-muted-foreground line-through mb-1">{product.oldPrice}</div>
                        )}
                      </div>
                    </CardContent>

                    <CardFooter className="pt-0">
                      <Button className="w-full bg-neon-cyan text-dark-bg hover:bg-neon-cyan/90 neon-glow font-semibold">
                        Купить
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Почему <span className="text-neon-purple">GameMarket</span>?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className="bg-card/50 border-border/50 hover:border-neon-purple/50 hover:neon-glow-purple transition-all duration-300 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-neon-purple/20 flex items-center justify-center mb-4 neon-glow-purple">
                    <Icon name={feature.icon as any} className="text-neon-purple" size={24} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-card/50 border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-3xl">🎮</div>
                <h4 className="text-xl font-bold text-neon-cyan">GameMarket</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Крупнейший игровой маркетплейс с мгновенной доставкой и гарантией безопасности
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-foreground">Покупателям</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-neon-cyan transition-colors">Как купить</a></li>
                <li><a href="#" className="hover:text-neon-cyan transition-colors">Гарантии</a></li>
                <li><a href="#" className="hover:text-neon-cyan transition-colors">Способы оплаты</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-foreground">Продавцам</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-neon-cyan transition-colors">Как продавать</a></li>
                <li><a href="#" className="hover:text-neon-cyan transition-colors">Комиссии</a></li>
                <li><a href="#" className="hover:text-neon-cyan transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-foreground">Поддержка</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-neon-cyan transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-neon-cyan transition-colors">Связаться с нами</a></li>
                <li><a href="#" className="hover:text-neon-cyan transition-colors">Партнёрам</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2024 GameMarket. Все права защищены.</p>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="border-neon-cyan/30 text-neon-cyan">
                <Icon name="Shield" size={14} className="mr-1" />
                SSL Защита
              </Badge>
              <Badge variant="outline" className="border-neon-purple/30 text-neon-purple">
                <Icon name="Zap" size={14} className="mr-1" />
                24/7 Поддержка
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
