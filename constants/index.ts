import {
  DollarSign,
  Settings,
  ShoppingCart,
  TrendingUp,
  BarChart2,
  ShoppingBag,
  Users,
  Zap,
  AlertTriangle,
  Package,
  UserX,
  UserPlus,
  UsersIcon,
  UserCheck,
  CreditCard,
  Clock,
  CheckCircle,
  Headset,
  Wallet,
  Watch,
  BicepsFlexed,
  Dumbbell,
  Coffee,
  Smartphone,
} from "lucide-react";

export const sidebarLinks = [
  {
    name: "Overview",
    icon: BarChart2,
    color: "#6366f1",
    href: "/",
  },
  { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
  { name: "Users", icon: Users, color: "#EC4899", href: "/users" },
  { name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
  { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
  { name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
  { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
];

export const overviewStats = [
  { name: "Total Sales", icon: Zap, value: "$12,345", color: "#6366F1" },
  { name: "New Users", icon: Users, value: "1,234", color: "#8B5CF6" },
  {
    name: "Total Products",
    icon: ShoppingBag,
    value: "567",
    color: "#EC4899",
  },
  {
    name: "Conversion Rate",
    icon: BarChart2,
    value: "12.5%",
    color: "#10B981",
  },
];

export const salesData = [
  { name: "Jul", sales: 4200 },
  { name: "Aug", sales: 3800 },
  { name: "Sep", sales: 5100 },
  { name: "Oct", sales: 4600 },
  { name: "Nov", sales: 5400 },
  { name: "Dec", sales: 7200 },
  { name: "Jan", sales: 6100 },
  { name: "Feb", sales: 5900 },
  { name: "Mar", sales: 6800 },
  { name: "Apr", sales: 6300 },
  { name: "May", sales: 7100 },
  { name: "Jun", sales: 7500 },
];

export const categoryData = [
  { name: "Electronics", value: 4500 },
  { name: "Clothing", value: 3200 },
  { name: "Home & Garden", value: 2800 },
  { name: "Books", value: 2100 },
  { name: "Sports & Outdoors", value: 1900 },
];

export const colors = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

export const salesChannelData = [
  { name: "Website", value: 45600 },
  { name: "Mobile App", value: 38200 },
  { name: "Marketplace", value: 29800 },
  { name: "Social Media", value: 18700 },
];

export const productStats = [
  { name: "Total Products", icon: Package, value: "124", color: "#6366F1" },
  { name: "Top Selling", icon: TrendingUp, value: "89", color: "#10B981" },
  { name: "Low Stock", icon: AlertTriangle, value: "23", color: "#F59E0B" },
  {
    name: "Total Revenue",
    icon: DollarSign,
    value: "$543,210",
    color: "#EF4444",
  },
];

export const productsData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 5500 },
];

export const productTableData = [
  {
    id: 1,
    name: "iPhone",
    category: "Electronics",
    price: 59.99,
    stock: 143,
    sales: 1200,
  },
  {
    id: 2,
    name: "Leather Wallet",
    category: "Accessories",
    price: 39.99,
    stock: 89,
    sales: 800,
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    stock: 56,
    sales: 650,
  },
  {
    id: 4,
    name: "Dumbbell",
    category: "Fitness",
    price: 29.99,
    stock: 210,
    sales: 950,
  },
  {
    id: 5,
    name: "Coffee Maker",
    category: "Home",
    price: 79.99,
    stock: 78,
    sales: 720,
  },
];

const users = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};

export const userStats = [
  {
    name: "Total Users",
    icon: UsersIcon,
    value: users.totalUsers.toLocaleString(),
    color: "#6366F1",
  },

  {
    name: "New Users Today",
    icon: UserPlus,
    value: users.newUsersToday.toLocaleString(),
    color: "#10B981",
  },

  {
    name: "Active Users",
    icon: UserCheck,
    value: users.activeUsers.toLocaleString(),
    color: "#F59E0B",
  },

  {
    name: "Churn Rate",
    icon: UserX,
    value: users.churnRate,
    color: "#EF4444",
  },
];

const sales = {
  totalRevenue: "$1,234,567",
  averageOrderValue: "$78.90",
  conversionRate: "3.45%",
  salesGrowth: "12.3%",
};

export const salesStats = [
  {
    name: "Total Revenue",
    icon: DollarSign,
    value: sales.totalRevenue,
    color: "#6366F1",
  },
  {
    name: "Avg. Order Value",
    icon: ShoppingCart,
    value: sales.averageOrderValue,
    color: "#10B981",
  },
  {
    name: "Conversion Rate",
    icon: TrendingUp,
    value: sales.conversionRate,
    color: "#F59E0B",
  },
  {
    name: "Sales Growth",
    icon: CreditCard,
    value: sales.salesGrowth,
    color: "#EF4444",
  },
];

const orders = {
  totalOrders: "1,234",
  pendingOrders: "56",
  completedOrders: "1,178",
  totalRevenue: "$98,765",
};

export const orderStats = [
  {
    name: "Total Orders",
    icon: ShoppingBag,
    value: orders.totalOrders,
    color: "#6366F1",
  },

  {
    name: "Pending Orders",
    icon: Clock,
    value: orders.pendingOrders,
    color: "#F59E0B",
  },

  {
    name: "Completed Orders",
    icon: CheckCircle,
    value: orders.completedOrders,
    color: "#10B981",
  },

  {
    name: "Total Revenue",
    icon: DollarSign,
    value: orders.totalRevenue,
    color: "#EF4444",
  },
];
