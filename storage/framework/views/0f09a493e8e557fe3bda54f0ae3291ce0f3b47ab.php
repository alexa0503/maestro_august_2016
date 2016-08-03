

<?php foreach($items as $item): ?>
  <li<?php $lm_attrs = $item->attr(); ob_start(); ?> <?php echo \Lavary\Menu\Builder::mergeStatic(ob_get_clean(), $lm_attrs); ?>>
    <?php if($item->link): ?> <a<?php $lm_attrs = $item->link->attr(); ob_start(); ?> <?php echo \Lavary\Menu\Builder::mergeStatic(ob_get_clean(), $lm_attrs); ?> href="<?php echo $item->url(); ?>">
      <?php echo $item->title; ?>

    </a>
    <?php else: ?>
      <?php echo $item->title; ?>

    <?php endif; ?>
    <?php if($item->hasChildren()): ?>
      <ul class="sub">
        <?php echo $__env->make(config('laravel-menu.views.bootstrap-items'),
array('items' => $item->children()), array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
      </ul>
    <?php endif; ?>
  </li>
  <?php if($item->divider): ?>
  	<li<?php echo Lavary\Menu\Builder::attributes($item->divider); ?>></li>
  <?php endif; ?>
<?php endforeach; ?>
